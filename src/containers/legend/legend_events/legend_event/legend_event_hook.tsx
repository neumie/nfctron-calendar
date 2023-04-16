import { useCalendarContext } from './../../../calendar/calendar_context';
import { Occasion } from '../../../../utils/utils';
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

export const useLegendEvent = (occasion: Occasion) => {
  const { setCalendarState, occasions, activeDate } = useCalendarContext();

  const { id, from, to } = occasion;

  const fromTimeString = convertDateToHoursMinutes(from);
  const toTimeString = convertDateToHoursMinutes(to);
  const fromString = prependFrom(activeDate, from, fromTimeString);
  const toString = prependTo(activeDate, to, toTimeString);

  const removeEvent = () => {
    const filteredEvents = occasions.filter((event) => event.id !== id);
    setCalendarState({ occasions: filteredEvents });
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
      selectedOccasionId: id,
    });
  };

  return { fromString, toString, handleDelete, handleClick };
};
