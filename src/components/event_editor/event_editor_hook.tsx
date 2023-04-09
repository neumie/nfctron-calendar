import { useCalendarContext } from './../../containers/calendar/calendar_context';
import type { Dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react';
import { ColorResult } from 'react-color';
import { Event } from './../../utils/utils';
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

  const eventFromDateDayjs = dayjs(eventState.fromDate);
  const eventFromTimeDayjs = dayjs(eventState.fromTime);
  const eventToDateDayjs = dayjs(eventState.toDate);
  const eventToTimeDayjs = dayjs(eventState.toTime);

  const makeEventObject = (): Event => {
    const eventFrom = combineDates(eventState.fromDate, eventState.fromTime);
    const eventTo = combineDates(eventState.toDate, eventState.toTime);
    return {
      id: crypto.randomUUID(),
      title: eventState.title,
      from: eventFrom,
      to: eventTo,
      color: eventState.color,
    };
  };

  const addEvent = () => {
    const newEvent = makeEventObject();
    setCalendarState({ events: [...events, newEvent] });
    resetEditor();
  };

  const editEvent = () => {
    const editedEvents = events.map((event): Event => {
      if (selectedEventId !== event.id) return event;
      const eventFrom = combineDates(eventState.fromDate, eventState.fromTime);
      const eventTo = combineDates(eventState.toDate, eventState.toTime);
      return {
        id: event.id,
        title: eventState.title,
        from: eventFrom,
        to: eventTo,
        color: eventState.color,
      };
    });
    setCalendarState({ events: editedEvents });
    resetEditor();
  };

  const findEvent = () => {
    return events.find((event) => event.id === selectedEventId);
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
    const event = findEvent();
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
