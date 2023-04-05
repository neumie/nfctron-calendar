import { createContext, useContext, useState } from "react";
import type { Context, ReactNode } from "react";

export enum GridViews {
  MONTH = "MONTH",
  WEEK = "WEEK",
}

export type CalendarState = {
  readonly setCalendarState: (
    state: Partial<Omit<CalendarState, "setCalendarState">>
  ) => void;
  activeGridView: GridViews;
  activeDate: Date;
};

const defaultState: CalendarState = {
  setCalendarState: () => {},
  activeGridView: GridViews.MONTH,
  activeDate: new Date(),
};

export const CalendarContext: Context<CalendarState> =
  createContext(defaultState);

export type CalendarContextProviderProps = {
  children?: ReactNode;
};

export const CalendarContextProvider = ({
  children,
}: CalendarContextProviderProps) => {
  const [calendarState, setCalendarState] = useState(defaultState);

  const setCalendarStateAction = (
    state: Partial<Omit<CalendarState, "setCalendarState">>
  ) => {
    setCalendarState((previousState) => ({ ...previousState, ...state }));
  };

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

export const useCalendarContext = (): CalendarState =>
  useContext(CalendarContext);
