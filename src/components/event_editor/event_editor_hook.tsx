import type { Dayjs } from "dayjs";
import { useCalendarContext } from "./../../containers/calendar/calendar_context";
import React, { useEffect } from "react";
import { ColorResult } from "react-color";

export const useEventEditor = () => {
  const {
    setCalendarState,
    activeDate,
    eventTitle,
    eventEditorLock,
    eventFrom,
    eventFromTime,
    eventTo,
    eventToTime,
    eventColor,
  } = useCalendarContext();

  const handleEventTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCalendarState({ eventTitle: event.target.value });
  };

  const handleEventFromChange = (newEventFrom: Dayjs | null) => {
    setCalendarState({ eventEditorLock: true });
    newEventFrom && setCalendarState({ eventFrom: newEventFrom.toDate() });
  };

  const handleEventFromTimeChange = (newEventFromTime: Dayjs | null) => {
    newEventFromTime &&
      setCalendarState({ eventFromTime: newEventFromTime.toDate() });
  };

  const handleEventToChange = (newEventTo: Dayjs | null) => {
    setCalendarState({ eventEditorLock: true });
    newEventTo && setCalendarState({ eventTo: newEventTo.toDate() });
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
      setCalendarState({ eventFrom: new Date(activeDate.getTime()) });
      setCalendarState({ eventTo: new Date(activeDate.getTime()) });
    }
  }, [activeDate]);

  return {
    setCalendarState,
    activeDate,
    eventTitle,
    handleEventTitleChange,
    eventFrom,
    handleEventFromChange,
    eventFromTime,
    handleEventFromTimeChange,
    eventTo,
    handleEventToChange,
    eventToTime,
    handleEventToTimeChange,
    eventColor,
    handleEventColorChange,
  };
};
