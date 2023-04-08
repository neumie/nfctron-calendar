import { filterEventsByDate, Event } from '../../../../utils/utils';
import { useCalendarContext } from '../../../calendar/calendar_context';
import { WeekGridCellEvent } from './week_grid_cell_event/week_grid_cell_event';

export const useWeekGridCell = (date: Date) => {
  const { setCalendarState, activeDate, events } = useCalendarContext();

  const handleClick = (event: React.MouseEvent) => {
    setCalendarState({ activeDate: date });
    if (event.detail === 2) {
      //Do something on double click
    }
  };

  const filteredEvents: Event[] = filterEventsByDate(events, date);
  const eventElements = filteredEvents.map(({ id, title, color, from, to }) => {
    return <WeekGridCellEvent key={id} title={title} color={color} from={from} to={to} />;
  });

  return {
    eventElements,
    handleClick,
  };
};
