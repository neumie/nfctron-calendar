import { useCalendarContext } from './../../containers/calendar/calendar_context';
import type { Dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react';
import { ColorResult } from 'react-color';
import { findEvent, Event, removeEvent } from './../../utils/utils';
import { combineDates } from '../../utils/date';
import dayjs from 'dayjs';

export const useEventEditor = () => {
  const { setCalendarState, activeDate, events, eventEditorLock, selectedEventId } =
    useCalendarContext();
  const [eventState, setEventState] = useState({
    title: '',
    fromDate: activeDate,
    fromTime: activeDate,
    toDate: activeDate,
    toTime: activeDate,
    color: '#0693E3',
  });
  // const [eventTitle, setEventTitle] = useState('');
  // const [eventFromDate, setEventFromDate] = useState(activeDate);
  // const [eventFromTime, setEventFromTime] = useState(activeDate);
  // const [eventToDate, setEventToDate] = useState(activeDate);
  // const [eventToTime, setEventToTime] = useState(activeDate);
  // const [eventColor, setEventColor] = useState('');

  const eventFromDateDayjs = dayjs(eventState.fromDate);
  const eventFromTimeDayjs = dayjs(eventState.fromTime);
  const eventToDateDayjs = dayjs(eventState.toDate);
  const eventToTimeDayjs = dayjs(eventState.toTime);

  const addEvent = () => {
    //Make the Event object
    const eventFrom = combineDates(eventState.fromDate, eventState.fromTime);
    const eventTo = combineDates(eventState.toDate, eventState.toTime);
    const newEvent: Event = {
      id: crypto.randomUUID(),
      title: eventState.title,
      from: eventFrom,
      to: eventTo,
      color: eventState.color,
    };

    setCalendarState({ events: [...events, newEvent] });
    resetEditor();
  };

  const editEvent = () => {
    removeEvent(setCalendarState, events, selectedEventId);
    addEvent();
  };

  const resetEditor = () => {
    setCalendarState({ selectedEventId: '' });
    setEventState({
      title: '',
      fromDate: activeDate,
      fromTime: activeDate,
      toDate: activeDate,
      toTime: activeDate,
      color: '#0693E3',
    });
  };

  const handleEventAdd = () => addEvent();
  const handleEventEdit = () => editEvent();
  const handleExitEditMode = () => resetEditor();

  const handleEventTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEventState((prev) => ({ ...prev, title: event.target.value }));
  };

  const handleEventFromChange = (newEventFromDate: Dayjs | null) => {
    setCalendarState({ eventEditorLock: true });
    newEventFromDate && setEventState((prev) => ({ ...prev, fromDate: newEventFromDate.toDate() }));
  };

  const handleEventFromTimeChange = (newEventFromTime: Dayjs | null) => {
    newEventFromTime && setEventState((prev) => ({ ...prev, fromTime: newEventFromTime.toDate() }));
  };

  const handleEventToChange = (newEventToDate: Dayjs | null) => {
    setCalendarState({ eventEditorLock: true });
    newEventToDate && setEventState((prev) => ({ ...prev, toDate: newEventToDate.toDate() }));
  };

  const handleEventToTimeChange = (newEventToTime: Dayjs | null) => {
    newEventToTime && setEventState((prev) => ({ ...prev, toTime: newEventToTime.toDate() }));
  };

  const handleEventColorChange = (newEventColor: ColorResult) => {
    setEventState((prev) => ({ ...prev, color: newEventColor.hex }));
  };

  useEffect(() => {
    if (eventEditorLock) return;

    const newEventDate = new Date(activeDate.getTime());
    setEventState((prev) => ({ ...prev, fromDate: newEventDate, toDate: newEventDate }));
  }, [activeDate]);

  useEffect(() => {
    const event = findEvent(events, selectedEventId);
    if (!event) return;

    setEventState({
      title: event.title,
      fromDate: event.from,
      fromTime: event.from,
      toDate: event.to,
      toTime: event.to,
      color: event.color,
    });
  }, [selectedEventId]);

  const eventTitle = eventState.title;
  const eventColor = eventState.color;

  return {
    selectedEventId,
    handleEventAdd,
    eventTitle,
    handleEventTitleChange,
    eventFromDateDayjs,
    handleEventFromChange,
    eventFromTimeDayjs,
    handleEventFromTimeChange,
    eventToDateDayjs,
    handleEventToChange,
    eventToTimeDayjs,
    handleEventToTimeChange,
    eventColor,
    handleEventColorChange,
    handleEventEdit,
    handleExitEditMode,
  };
};
