import { useCalendarContext } from './../../../calendar/calendar_context';
import { Event } from '../../../../utils/utils';
import { convertDateToHoursMinutes } from '../../../../utils/date';

const prependFrom = (activeDate: Date, from: Date, fromTimeString: string) => {
  if (!(activeDate.getDate() > from.getDate())) return fromTimeString;
  const fromDay = from.toLocaleString('en-gb', { weekday: 'short' });
  return `${fromDay} ${fromTimeString}`;
};

const prependTo = (activeDate: Date, to: Date, toTimeString: string) => {
  if (!(activeDate.getDate() < to.getDate())) return toTimeString;
  const toDay = to.toLocaleString('en-gb', { weekday: 'short' });
  return `${toDay} ${toTimeString}`;
};

export const useLegendEvent = (event: Event) => {
  const { setCalendarState, events, activeDate } = useCalendarContext();

  const { id, from, to } = event;

  const fromTimeString = convertDateToHoursMinutes(from);
  const toTimeString = convertDateToHoursMinutes(to);
  const fromString = prependFrom(activeDate, from, fromTimeString);
  const toString = prependTo(activeDate, to, toTimeString);

  const removeEvent = () => {
    const filteredEvents = events.filter((event) => event.id !== id);
    setCalendarState({ events: filteredEvents });
  };

  const handleDelete = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    removeEvent();
  };

  const handleClick = () => {
    loadEventToEditor();
  };

  const loadEventToEditor = () => {
    setCalendarState({
      selectedEventId: id,
    });
  };

  return { fromString, toString, handleDelete, handleClick };
};
