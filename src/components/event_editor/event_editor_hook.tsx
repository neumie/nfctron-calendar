import type { Dayjs } from "dayjs";
import { useCalendarContext } from "./../../containers/calendar/calendar_context";
import React, { useEffect } from "react";
import { ColorResult } from "react-color";
import {
  addEvent,
  editEvent,
  resetEventEditorInputs,
} from "./../../utils/utils";

export const useEventEditor = () => {
  const {
    setCalendarState,
    activeDate,
    eventTitle,
    eventEditorLock,
    selectedEventId,
    eventFromDate,
    eventFromTime,
    eventToDate,
    eventToTime,
    eventColor,
  } = useCalendarContext();

  const handleEventAdd = () => {
    addEvent(
      setCalendarState,
      activeDate,
      eventTitle,
      eventFromDate,
      eventFromTime,
      eventToDate,
      eventToTime,
      eventColor
    );
  };

  const handleEventEdit = () => {
    editEvent(
      setCalendarState,
      selectedEventId,
      activeDate,
      eventTitle,
      eventFromDate,
      eventFromTime,
      eventToDate,
      eventToTime,
      eventColor
    );
  };

  const handleExitEditMode = () => {
    resetEventEditorInputs(setCalendarState, activeDate);
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
    selectedEventId,
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
    handleEventEdit,
    handleExitEditMode,
  };
};
