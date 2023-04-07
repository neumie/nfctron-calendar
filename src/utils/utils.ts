import { CalendarState, Event } from "../containers/calendar/calendar_context";

export const dayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export type ShiftDirection = "forward" | "backward";

export const getEvents = (date: Date) => {
  const eventsPayload = localStorage.getItem("events");
  if (!eventsPayload) return [];
  const events: Event[] = JSON.parse(eventsPayload);
  const found = events.filter((event) => {
    const from = new Date(event.from);
    const to = new Date(event.to);
    return isDateInRange(date, from, to);
  });
  return found;
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

export const addEvent = (setCalendarState: (
    state: Partial<Omit<CalendarState, "setCalendarState">>
  ) => void, activeDate: Date, eventTitle: string, eventFromDate: Date, eventFromTime: Date, eventToDate: Date, eventToTime: Date, eventColor: string) => {
  //Make the Event object
  const eventFrom = combineDates(eventFromDate, eventFromTime);
  const eventTo = combineDates(eventToDate, eventToTime);
  const newEvent: Event = {
    id: crypto.randomUUID(),
    title: eventTitle,
    from: eventFrom,
    to: eventTo,
    color: eventColor,
  };

  //Push the Event object to localStorage
  const prevLocalStorage = localStorage.getItem("events");
  if (prevLocalStorage) {
    const prevEvents = JSON.parse(prevLocalStorage);
    prevEvents.push(newEvent);
    localStorage.setItem("events", JSON.stringify(prevEvents));
  } else {
    localStorage.setItem("events", JSON.stringify([newEvent]));
  }

  resetEventInputs(setCalendarState, activeDate);
};

export const resetEventInputs = (setCalendarState: (
    state: Partial<Omit<CalendarState, "setCalendarState">>
  ) => void, activeDate: Date) => {
  setCalendarState({
    eventEditorLock: false,
    eventTitle: "",
    eventFromDate: activeDate,
    eventFromTime: activeDate,
    eventToDate: activeDate,
    eventToTime: activeDate,
    eventColor: "",
  });
}

export const combineDates = (date1: Date, date2: Date): Date => {
  const year = date1.getFullYear();
  const month = date1.getMonth();
  const day = date1.getDate();
  const hours = date2.getHours();
  const minutes = date2.getMinutes();

  return new Date(year, month, day, hours, minutes);
};

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