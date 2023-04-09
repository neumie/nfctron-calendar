import { filterEventsByDate, Event } from '../../../../utils/utils';
import { datesAreSameDay } from '../../../../utils/date';
import { useCalendarContext } from '../../../calendar/calendar_context';
import { useTheme } from '@mui/material/styles';
import { MonthGridCellEvent } from './month_grid_cell_event/month_grid_cell_event';
import { MonthGridCellElipsis } from './month_grid_cell_event/month_grid_cell_elipsis/month_grid_cell_elipsis';

export const useMonthGridCell = (date: Date) => {
  const { setCalendarState, activeDate, events } = useCalendarContext();
  const theme = useTheme();

  const selected: boolean = datesAreSameDay(date, activeDate);

  const today: boolean = datesAreSameDay(date, new Date());
  const day: number = date.getDate();

  const filteredEvents: Event[] = filterEventsByDate(events, date);
  const allEventElements = filteredEvents.map(({ id, title, color }) => {
    return <MonthGridCellEvent key={id} title={title} color={color} />;
  });

  const eventElements = allEventElements.slice(0, 3);
  allEventElements.length > 3 && eventElements.push(<MonthGridCellElipsis key={-1} />);

  //Display month if it's the first day of the month
  const month = getMonthString(day, date);

  const handleClick = (event: React.MouseEvent) => {
    setCalendarState({ activeDate: date });
    if (event.detail === 2) {
      //Do something on double click
    }
  };

  return {
    theme,
    today,
    selected,
    day,
    month,
    handleClick,
    eventElements,
  };
};

const getMonthString = (day: number, date: Date) => {
  if (day !== 1) return '';
  return date.toLocaleString('default', { month: 'short' });
};
