import { useCalendarContext } from './../../containers/calendar/calendar_context';
import type { Dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react';
import { ColorResult } from 'react-color';
import { combineDates, findEvent, Event, removeEvent } from './../../utils/utils';
import dayjs from 'dayjs';

export const useEventEditor = () => {
  const { setCalendarState, activeDate, events, eventEditorLock, selectedEventId } =
    useCalendarContext();
  const [eventTitle, setEventTitle] = useState('');
  const [eventFromDate, setEventFromDate] = useState(activeDate);
  const [eventFromTime, setEventFromTime] = useState(activeDate);
  const [eventToDate, setEventToDate] = useState(activeDate);
  const [eventToTime, setEventToTime] = useState(activeDate);
  const [eventColor, setEventColor] = useState('');

  const eventFromDateDayjs = dayjs(eventFromDate);
  const eventFromTimeDayjs = dayjs(eventFromTime);
  const eventToDateDayjs = dayjs(eventToDate);
  const eventToTimeDayjs = dayjs(eventToTime);

  const addEvent = () => {
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

    setCalendarState({ events: [...events, newEvent] });
    resetEditor();
  };

  const editEvent = () => {
    removeEvent(setCalendarState, events, selectedEventId);
    addEvent();
  };

  const resetEditor = () => {
    setCalendarState({ selectedEventId: '' });
    setEventTitle('');
    setEventFromDate(activeDate);
    setEventFromTime(activeDate);
    setEventToDate(activeDate);
    setEventToTime(activeDate);
    setEventColor('');
  };

  const handleEventAdd = () => addEvent();
  const handleEventEdit = () => editEvent();
  const handleExitEditMode = () => resetEditor();

  const handleEventTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEventTitle(event.target.value);
  };

  const handleEventFromChange = (newEventFromDate: Dayjs | null) => {
    setCalendarState({ eventEditorLock: true });
    newEventFromDate && setEventFromDate(newEventFromDate.toDate());
  };

  const handleEventFromTimeChange = (newEventFromTime: Dayjs | null) => {
    newEventFromTime && setEventFromTime(newEventFromTime.toDate());
  };

  const handleEventToChange = (newEventToDate: Dayjs | null) => {
    setCalendarState({ eventEditorLock: true });
    newEventToDate && setEventToDate(newEventToDate.toDate());
  };

  const handleEventToTimeChange = (newEventToTime: Dayjs | null) => {
    newEventToTime && setEventToTime(newEventToTime.toDate());
  };

  const handleEventColorChange = (newEventColor: ColorResult) => {
    setEventColor(newEventColor.hex);
  };

  useEffect(() => {
    if (eventEditorLock) return;

    const newEventDate = new Date(activeDate.getTime());
    setEventFromDate(newEventDate);
    setEventToDate(newEventDate);
  }, [activeDate]);

  useEffect(() => {
    const event = findEvent(events, selectedEventId);
    if (!event) return;

    setEventTitle(event.title);
    setEventFromDate(event.from);
    setEventFromTime(event.from);
    setEventToDate(event.to);
    setEventToTime(event.to);
    setEventColor(event.color);
  }, [selectedEventId]);

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
