import { useCalendarContext } from '../../containers/calendar/calendar_context';
import { Dayjs, isDayjs } from 'dayjs';
import React, { useEffect, useState } from 'react';
import { Occasion } from '../../utils/utils';
import { combineDates } from '../../utils/date';
import dayjs from 'dayjs';

const transformDayjs = <T extends keyof occasionState>(value: occasionState[T] | Dayjs | null) => {
  if (isDayjs(value)) return value.toDate();
  return value;
};

export type occasionState = {
  title: string;
  fromDate: Date;
  fromTime: Date;
  toDate: Date;
  toTime: Date;
  color: string;
};

export const useEventEditor = () => {
  const { setCalendarState, activeDate, occasions, occasionEditorLock, selectedOccasionId } =
    useCalendarContext();
  const [eventState, setOccasionState] = useState({
    title: '',
    fromDate: activeDate,
    fromTime: activeDate,
    toDate: activeDate,
    toTime: activeDate,
    color: '#0693E3',
  });

  const occasionFromDateDayjs = dayjs(eventState.fromDate);
  const occasionFromTimeDayjs = dayjs(eventState.fromTime);
  const occasionToDateDayjs = dayjs(eventState.toDate);
  const occasionToTimeDayjs = dayjs(eventState.toTime);

  const makeEventObject = (): Occasion => {
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

  const handleEventAdd = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const newOccasion = makeEventObject();
    setCalendarState({ occasions: [...occasions, newOccasion] });
    resetEditor();
  };

  const handleOccasionEdit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const editedEvents = occasions.map((event): Occasion => {
      if (selectedOccasionId !== event.id) return event;
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
    setCalendarState({ occasions: editedEvents });
    resetEditor();
  };

  const findEvent = () => {
    return occasions.find((occasion) => occasion.id === selectedOccasionId);
  };

  const resetEditor = () => {
    const currentTime = new Date();
    setCalendarState({ selectedOccasionId: '', occasionEditorLock: false });
    setOccasionState({
      title: '',
      fromDate: activeDate,
      fromTime: currentTime,
      toDate: activeDate,
      toTime: currentTime,
      color: '#0693E3',
    });
  };

  const handleFormStateChange = <T extends keyof occasionState>(
    field: T,
    value: occasionState[T] | Dayjs | null,
    shouldLock?: boolean,
  ) => {
    const transformedValue = transformDayjs(value);
    shouldLock && setCalendarState({ occasionEditorLock: true });
    setOccasionState((prev) => ({ ...prev, [field]: transformedValue }));
  };

  const handleEditorReset = () => resetEditor();

  useEffect(() => {
    if (occasionEditorLock) return;

    const newEventDate = new Date(activeDate.getTime());
    setOccasionState((prev) => ({ ...prev, fromDate: newEventDate, toDate: newEventDate }));
  }, [activeDate]);

  useEffect(() => {
    const event = findEvent();
    if (!event) return;

    setOccasionState({
      title: event.title,
      fromDate: event.from,
      fromTime: event.from,
      toDate: event.to,
      toTime: event.to,
      color: event.color,
    });
  }, [selectedOccasionId]);

  const occasionTitle = eventState.title;
  const occasionColor = eventState.color;

  return {
    selectedOccasionId: selectedOccasionId,
    handleEventAdd,
    occasionTitle,
    occasionFromDateDayjs,
    occasionFromTimeDayjs,
    occasionToDateDayjs,
    occasionToTimeDayjs,
    occasionColor,
    handleOccasionEdit,
    handleEditorReset,
    handleFormStateChange,
  };
};
