export type ShiftDirection = "forward" | "backward";

/**
 * Corrects the year and month, if month has reached over/under 11/0
 * @param month 
 * @param year 
 * @returns corrected date
 */
const checkDate = (month: number, year: number): number[] => {
  if (month < 0) return [11, year-1] 
  else if (month > 11) return [0, year+1]
  return [month, year];
}

/**
 * Shifts supplied date one month forwards/backwards
 * @param date date to shift
 * @param direction direction of the shift
 * @returns shifted date
 */
export const shiftMonth = (date: Date, direction: ShiftDirection): Date => {
  const monthIncrement = direction === "forward" ? 1 : -1;

  const monthAfterShift = date.getMonth() + monthIncrement;
  const year = date.getFullYear();
  const [newMonth, newYear] = checkDate(monthAfterShift, year);

  return new Date(newYear, newMonth, date.getDate());
};

/**
 * Checks if supplied date is in range of the other two supplied dates
 * @param date date to be checked
 * @param from starting date
 * @param to ending date
 * @returns true/false if the date is in between from and to
 */
export const isDateInRange = (date: Date, from: Date, to: Date): boolean => {
  from.setHours(0) && from.setMinutes(0) && from.setSeconds(0, 0);
  to.setHours(0) && to.setMinutes(0) && from.setSeconds(0, 0);
  return from <= date && date <= to;
};

/**
 * Checks if the supplied dates are the same day. Doesn't check time.
 * @param firstDate 
 * @param secondDate 
 * @returns true/false if the dates are reffering to the same day
 */
export const datesAreSameDay = (firstDate: Date, secondDate: Date): boolean => {
  return (
    firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getDate() === secondDate.getDate()
  );
};

/**
 * Takes year, month, day from first date and combines it with hours and minutes of the second date.
 * @param date1 year, month, day
 * @param date2 hours, minutes
 * @returns the combined date
 */
export const combineDates = (date1: Date, date2: Date): Date => {
  const year = date1.getFullYear();
  const month = date1.getMonth();
  const day = date1.getDate();
  const hours = date2.getHours();
  const minutes = date2.getMinutes();

  return new Date(year, month, day, hours, minutes);
};

/**
 * Converts date to easily readable string
 * @param time 
 * @returns HH:MM
 */
export const convertDateToHoursMinutes = (time: Date): string => {
  const hours = padToTwoDigits(time.getHours());
  const minutes = padToTwoDigits(time.getMinutes());

  return `${hours}:${minutes}`;
};

/**
 * Adds 0 behind the number if it's < 10
 * @param number 
 * @returns padded number as string
 */
export const padToTwoDigits = (number: number): string => {
  return number.toString().padStart(2, '0')
}