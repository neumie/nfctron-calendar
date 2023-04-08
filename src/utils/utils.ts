import { CalendarState } from "../containers/calendar/calendar_context";

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

export const getEvents = (): Event[] => {
  const eventsPayload = localStorage.getItem("events");
  if (!eventsPayload) return [];
  let events: Event[] = JSON.parse(eventsPayload);
  events = events.map(event => {
    const from = new Date(event.from);
    const to = new Date(event.to);
    return { ...event, from, to };
  })
  return events
}

export const filterEventsByDate = (events: Event[], date: Date): Event[] => {
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
  ) => void,
    activeDate: Date,
    eventTitle: string,
    eventFromDate: Date,
    eventFromTime: Date,
    eventToDate: Date,
    eventToTime: Date,
    eventColor: string) => {
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

  pushEventToLocalStorage(newEvent);
  resetEventEditorInputs(setCalendarState, activeDate);
};

export const removeEvent = (setCalendarState: (
    state: Partial<Omit<CalendarState, "setCalendarState">>
  ) => void, eventId: string) => {
  let events = getEvents();
  events = events.filter(event => event.id !== eventId);

  localStorage.setItem("events", JSON.stringify(events));
  //Trigger re-render
  setCalendarState({});
}

export const loadEvent = (setCalendarState: (
    state: Partial<Omit<CalendarState, "setCalendarState">>
  ) => void, eventId: string) => {
    const events = getEvents();
    const event: Event | undefined = events.find(event => event.id === eventId)

    if (!event) {
      return
    }
    
    setCalendarState({ 
      eventEditorLock: true,
      eventTitle: event.title,
      eventFromDate: event.from,
      eventFromTime: event.from,
      eventToDate: event.to,
      eventToTime: event.to,
      eventColor: event.color, 
      selectedEventId: eventId,
    })
}

export const pushEventToLocalStorage = (event: Event): void => {
  const prevLocalStorage = localStorage.getItem("events");
  if (prevLocalStorage) {
    const prevEvents = JSON.parse(prevLocalStorage);
    event && prevEvents.push(event);
    localStorage.setItem("events", JSON.stringify(prevEvents));
  } else {
    localStorage.setItem("events", JSON.stringify([event]));
  }
}

export const resetEventEditorInputs = (setCalendarState: (
    state: Partial<Omit<CalendarState, "setCalendarState">>
  ) => void, activeDate: Date) => {
  setCalendarState({
    selectedEventId: "",
    eventEditorLock: false,
    eventTitle: "",
    eventFromDate: activeDate,
    eventFromTime: activeDate,
    eventToDate: activeDate,
    eventToTime: activeDate,
    eventColor: "",
  });
}

export const editEvent = (setCalendarState: (
    state: Partial<Omit<CalendarState, "setCalendarState">>
  ) => void,
    eventId: string,
    activeDate: Date,
    eventTitle: string,
    eventFromDate: Date,
    eventFromTime: Date,
    eventToDate: Date,
    eventToTime: Date,
    eventColor: string) => {
    removeEvent(setCalendarState, eventId);
    addEvent(setCalendarState, activeDate, eventTitle, eventFromDate, eventFromTime, eventToDate, eventToTime, eventColor);
}

export const combineDates = (date1: Date, date2: Date): Date => {
  const year = date1.getFullYear();
  const month = date1.getMonth();
  const day = date1.getDate();
  const hours = date2.getHours();
  const minutes = date2.getMinutes();

  return new Date(year, month, day, hours, minutes);
};

export const getDateDifference = (from: Date, to: Date): number => {
  const difference: number = Math.abs(to.getTime() - from.getTime());
  return difference;
}

export const padToTwoDigits = (number: number): string => {
  return number.toString().padStart(2, '0')
}

export const convertMsToString = (ms: number): string => {
  const MS_PER_MINUTE = 1000 * 60;

  let minutes: number = ms / MS_PER_MINUTE;
  let hours: number = Math.floor(minutes / 60);
  const days: number = Math.floor(hours / 24);
  hours = days % 24;
  minutes = minutes % 60;

  const daysString = padToTwoDigits(days);
  const hoursString = padToTwoDigits(hours);
  const minutesString = padToTwoDigits(minutes);

  return `${daysString}:${hoursString}:${minutesString}`;
}

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

export const convertDateToHoursMinutes = (time: Date): string => {
  const hours = padToTwoDigits(time.getHours());
  const minutes = padToTwoDigits(time.getMinutes());

  return `${hours}:${minutes}`;
};