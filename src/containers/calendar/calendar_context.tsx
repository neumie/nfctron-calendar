import { createContext, useContext, useEffect, useState } from 'react';
import { GridViews } from '../../utils/utils';
import type { Context, ReactNode } from 'react';
import type { Event } from '../../utils/utils';

export type CalendarState = {
  readonly setCalendarState: (state: Partial<Omit<CalendarState, 'setCalendarState'>>) => void;
  events: Event[];
  activeGridView: GridViews;
  activeDate: Date;
  eventEditorLock: boolean;
  selectedEventId: string;
};

const defaultDate = new Date();
const defaultState: CalendarState = {
  setCalendarState: () => {},
  events: [],
  activeGridView: GridViews.MONTH,
  activeDate: defaultDate,
  eventEditorLock: false,
  selectedEventId: '',
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
    setCalendarStateAction({ events: localStorageEvents });
  }, []);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(calendarState.events));
  }, [calendarState.events.length]);

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

const getEventsFromStorage = (): Event[] => {
  const eventsPayload = localStorage.getItem('events');
  if (!eventsPayload) return [];

  let events: Event[] = JSON.parse(eventsPayload);
  events = events.map((event) => {
    const from = new Date(event.from);
    const to = new Date(event.to);
    return { ...event, from, to };
  });

  return events;
};
