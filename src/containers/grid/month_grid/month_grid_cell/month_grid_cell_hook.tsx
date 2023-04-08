import { datesAreSameDay, filterEventsByDate, Event } from '../../../../utils/utils';
import { useCalendarContext } from '../../../calendar/calendar_context';
import { useTheme } from '@mui/material/styles';
import { MonthGridCellEvent } from './month_grid_cell_event/month_grid_cell_event';

export const useMonthGridCell = (date: Date) => {
  const { setCalendarState, activeDate, events } = useCalendarContext();
  const theme = useTheme();

  const selected: boolean = datesAreSameDay(date, activeDate);
  const today: boolean = datesAreSameDay(date, new Date());
  const day: number = date.getDate();

  const filteredEvents: Event[] = filterEventsByDate(events, date);
  const eventElements = filteredEvents.map(({ id, title, color }) => {
    return <MonthGridCellEvent key={id} title={title} color={color} />;
  });

  //Display month if it's the first day of the month
  let month: string = '';
  if (day === 1) {
    month = date.toLocaleString('default', { month: 'short' });
  }

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
