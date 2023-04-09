import { useCalendarContext } from './../../../calendar/calendar_context';
import { Event } from '../../../../utils/utils';
import { convertDateToHoursMinutes } from '../../../../utils/date';

export const useLegendEvent = (event: Event) => {
  const { setCalendarState, events, activeDate } = useCalendarContext();

  const { id, from, to } = event;

  let fromString = convertDateToHoursMinutes(from);
  let toString = convertDateToHoursMinutes(to);
  if (activeDate.getDate() > from.getDate()) {
    const fromDay = from.toLocaleString('en-gb', { weekday: 'short' });
    fromString = `${fromDay} ${fromString}`;
  }
  if (activeDate.getDate() < to.getDate()) {
    const toDay = to.toLocaleString('en-gb', { weekday: 'short' });
    toString = `${toDay} ${toString}`;
  }

  const removeEvent = () => {
    const filteredEvents = events.filter((event) => event.id !== id);
    setCalendarState({ events: filteredEvents });
  };

  const handleDelete = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    removeEvent();
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
