import { useCalendarContext } from './../../containers/calendar/calendar_context';
import { Dayjs, isDayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { Event } from './../../utils/utils';
import { combineDates } from '../../utils/date';
import dayjs from 'dayjs';

const transformDayjs = <T extends keyof EventState>(value: EventState[T] | Dayjs | null) => {
  if (isDayjs(value)) return value.toDate();
  return value;
};

export type EventState = {
  title: string;
  fromDate: Date;
  fromTime: Date;
  toDate: Date;
  toTime: Date;
  color: string;
};

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
    setCalendarState({ selectedEventId: '', eventEditorLock: false });
    setEventState({
      title: '',
      fromDate: activeDate,
      fromTime: activeDate,
      toDate: activeDate,
      toTime: activeDate,
      color: '#0693E3',
    });
  };

  const handleFormStateChange = <T extends keyof EventState>(
    field: T,
    value: EventState[T] | Dayjs | null,
    shouldLock?: boolean,
  ) => {
    const transformedValue = transformDayjs(value);
    shouldLock && setCalendarState({ eventEditorLock: true });
    transformedValue && setEventState((prev) => ({ ...prev, [field]: transformedValue }));
  };

  const handleEventAdd = () => addEvent();
  const handleEventEdit = () => editEvent();
  const handleExitEditMode = () => resetEditor();

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
    eventFromDateDayjs,
    eventFromTimeDayjs,
    eventToDateDayjs,
    eventToTimeDayjs,
    eventColor,
    handleEventEdit,
    handleExitEditMode,
    handleFormStateChange,
  };
};
