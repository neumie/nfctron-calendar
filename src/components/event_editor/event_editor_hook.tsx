import type { Dayjs } from "dayjs";
import {
  Event,
  useCalendarContext,
} from "./../../containers/calendar/calendar_context";
import React, { useEffect } from "react";
import { ColorResult } from "react-color";

export const useEventEditor = () => {
  const {
    setCalendarState,
    activeDate,
    eventTitle,
    eventEditorLock,
    eventFromDate,
    eventFromTime,
    eventToDate,
    eventToTime,
    eventColor,
  } = useCalendarContext();

  const handleEventAdd = () => {
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

    //Reset all event things
    setCalendarState({
      eventEditorLock: false,
      eventTitle: "",
      eventFromDate: activeDate,
      eventFromTime: activeDate,
      eventToDate: activeDate,
      eventToTime: activeDate,
      eventColor: "",
    });
  };

  const handleEventTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCalendarState({ eventTitle: event.target.value });
  };

  const handleEventFromChange = (newEventFromDate: Dayjs | null) => {
    setCalendarState({ eventEditorLock: true });
    newEventFromDate &&
      setCalendarState({ eventFromDate: newEventFromDate.toDate() });
  };

  const handleEventFromTimeChange = (newEventFromTime: Dayjs | null) => {
    newEventFromTime &&
      setCalendarState({ eventFromTime: newEventFromTime.toDate() });
  };

  const handleEventToChange = (newEventToDate: Dayjs | null) => {
    setCalendarState({ eventEditorLock: true });
    newEventToDate &&
      setCalendarState({ eventToDate: newEventToDate.toDate() });
  };

  const handleEventToTimeChange = (newEventToTime: Dayjs | null) => {
    newEventToTime &&
      setCalendarState({ eventToTime: newEventToTime.toDate() });
  };

  const handleEventColorChange = (newEventColor: ColorResult) => {
    setCalendarState({ eventColor: newEventColor.hex });
  };

  useEffect(() => {
    if (!eventEditorLock) {
      setCalendarState({ eventFromDate: new Date(activeDate.getTime()) });
      setCalendarState({ eventToDate: new Date(activeDate.getTime()) });
    }
  }, [activeDate]);

  return {
    handleEventAdd,
    eventTitle,
    handleEventTitleChange,
    eventFromDate,
    handleEventFromChange,
    eventFromTime,
    handleEventFromTimeChange,
    eventToDate,
    handleEventToChange,
    eventToTime,
    handleEventToTimeChange,
    eventColor,
    handleEventColorChange,
  };
};

const combineDates = (date1: Date, date2: Date): Date => {
  const year = date1.getFullYear();
  const month = date1.getMonth();
  const day = date1.getDate();
  const hours = date2.getHours();
  const minutes = date2.getMinutes();

  return new Date(year, month, day, hours, minutes);
};
