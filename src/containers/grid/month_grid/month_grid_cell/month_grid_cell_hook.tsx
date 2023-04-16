import { filterEventsByDate, Occasion } from '../../../../utils/utils';
import { datesAreSameDay } from '../../../../utils/date';
import { useCalendarContext } from '../../../calendar/calendar_context';
import { useTheme } from '@mui/material/styles';
import { MonthGridCellEvent } from './month_grid_cell_event/month_grid_cell_event';

export const useMonthGridCell = (date: Date) => {
  const { setCalendarState, activeDate, occasions } = useCalendarContext();
  const theme = useTheme();

  const selected: boolean = datesAreSameDay(date, activeDate);

  const today: boolean = datesAreSameDay(date, new Date());
  const day: number = date.getDate();

  const filteredEvents: Occasion[] = filterEventsByDate(occasions, date);
  const eventElements = filteredEvents.map(({ id, title, color }) => {
    return <MonthGridCellEvent key={id} title={title} color={color} />;
  });

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
