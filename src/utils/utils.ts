import { CalendarState } from "../containers/calendar/calendar_context";
import { isDateInRange } from "./date";

export const dayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export enum GridViews {
  MONTH = "MONTH",
  WEEK = "WEEK",
}

export type Event = {
  id: string;
  title: string;
  from: Date;
  to: Date;
  color: string;
};

export const filterEventsByDate = (events: Event[], date: Date): Event[] => {
  const found = events.filter((event) => {
    const from = new Date(event.from);
    const to = new Date(event.to);
    return isDateInRange(date, from, to);
  });
  return found;
};