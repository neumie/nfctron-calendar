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

export type Occasion = {
  id: string;
  title: string;
  from: Date;
  to: Date;
  color: string;
};


/**
 * Filters occasions array and returns occasions that happen on supplied date.
 * 
 * @param events
 * @param date 
 * @returns occasions that happen on supplied date.
 */
export const filterEventsByDate = (events: Occasion[], date: Date): Occasion[] => {
  const found = events.filter((event) => {
    const from = new Date(event.from);
    const to = new Date(event.to);
    return isDateInRange(date, from, to);
  });
  return found;
};