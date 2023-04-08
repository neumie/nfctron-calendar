export type ShiftDirection = "forward" | "backward";

export const shiftMonth = (date: Date, direction: ShiftDirection): Date => {
  const monthIncrement = direction === "forward" ? 1 : -1;

  let newMonth = date.getMonth() + monthIncrement;
  let newYear = date.getFullYear();
  if (newMonth < 0) {
    newMonth = 11;
    newYear--;
  } else if (newMonth > 11) {
    newMonth = 0;
    newYear++;
  }

  return new Date(newYear, newMonth, date.getDate());
};

export const isDateInRange = (date: Date, from: Date, to: Date): boolean => {
  from.setHours(0) && from.setMinutes(0) && from.setSeconds(0, 0);
  to.setHours(0) && to.setMinutes(0) && from.setSeconds(0, 0);
  return from <= date && date <= to;
};

export const datesAreSameDay = (firstDate: Date, secondDate: Date): boolean => {
  return (
    firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getDate() === secondDate.getDate()
  );
};

export const combineDates = (date1: Date, date2: Date): Date => {
  const year = date1.getFullYear();
  const month = date1.getMonth();
  const day = date1.getDate();
  const hours = date2.getHours();
  const minutes = date2.getMinutes();

  return new Date(year, month, day, hours, minutes);
};

export const convertDateToHoursMinutes = (time: Date): string => {
  const hours = padToTwoDigits(time.getHours());
  const minutes = padToTwoDigits(time.getMinutes());

  return `${hours}:${minutes}`;
};

export const padToTwoDigits = (number: number): string => {
  return number.toString().padStart(2, '0')
}