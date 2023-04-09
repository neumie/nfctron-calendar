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

/**
 * Available grid views
 */
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


/**
 * Filters events array and returns events that happen on supplied date.
 * 
 * @param events
 * @param date 
 * @returns events that happen on supplied date.
 */
export const filterEventsByDate = (events: Event[], date: Date): Event[] => {
  const found = events.filter((event) => {
    const from = new Date(event.from);
    const to = new Date(event.to);
    return isDateInRange(date, from, to);
  });
  return found;
};