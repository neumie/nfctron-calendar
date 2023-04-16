import { createContext, useContext, useEffect, useState } from 'react';
import { GridViews } from '../../utils/utils';
import type { Context, ReactNode } from 'react';
import type { Occasion } from '../../utils/utils';

export type CalendarState = {
  readonly setCalendarState: (state: Partial<Omit<CalendarState, 'setCalendarState'>>) => void;
  occasions: Occasion[];
  activeGridView: GridViews;
  activeDate: Date;
  occasionEditorLock: boolean;
  selectedOccasionId: string;
};

const defaultDate: Date = new Date();
defaultDate.setHours(0);
defaultDate.setMinutes(0, 0);
defaultDate.setSeconds(0, 0);

const defaultState: CalendarState = {
  setCalendarState: () => {},
  occasions: [],
  activeGridView: GridViews.MONTH,
  activeDate: defaultDate,
  occasionEditorLock: false,
  selectedOccasionId: '',
};

export const CalendarContext: Context<CalendarState> = createContext(defaultState);

export type CalendarContextProviderProps = {
  children?: ReactNode;
};

export const CalendarContextProvider = ({ children }: CalendarContextProviderProps) => {
  const [calendarState, setCalendarState] = useState(defaultState);

  const setCalendarStateAction = (state: Partial<Omit<CalendarState, 'setCalendarState'>>) => {
    setCalendarState((previousState) => ({ ...previousState, ...state }));
  };

  useEffect(() => {
    const localStorageEvents = getEventsFromStorage();
    setCalendarStateAction({ occasions: localStorageEvents });
  }, []);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(calendarState.occasions));
  }, [calendarState.occasions.length]);

  return (
    <CalendarContext.Provider
      value={{
        ...calendarState,
        setCalendarState: setCalendarStateAction,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendarContext = (): CalendarState => useContext(CalendarContext);

const getEventsFromStorage = (): Occasion[] => {
  const eventsPayload = localStorage.getItem('events');
  if (!eventsPayload) return [];

  const storageEvents: Occasion[] = JSON.parse(eventsPayload);
  return storageEvents.map((event) => {
    const from = new Date(event.from);
    const to = new Date(event.to);
    return { ...event, from, to };
  });
};
