import { useCalendarContext } from './../../../calendar/calendar_context';
import { Event, removeEvent } from '../../../../utils/utils';
import { convertDateToHoursMinutes } from '../../../../utils/date';

export const useLegendEvent = (event: Event) => {
  const { setCalendarState, events } = useCalendarContext();

  const { id, from, to } = event;

  const fromString = convertDateToHoursMinutes(from);
  const toString = convertDateToHoursMinutes(to);

  const handleDelete = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    removeEvent(setCalendarState, events, id);
  };

  const handleClick = () => {
    loadEventToEditor(id);
  };

  const loadEventToEditor = (eventId: string) => {
    setCalendarState({
      selectedEventId: eventId,
    });
  };

  return { fromString, toString, handleDelete, handleClick };
};
