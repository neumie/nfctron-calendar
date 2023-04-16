import { datesAreSameDay } from '../../../../utils/date';
import { filterEventsByDate, Occasion } from '../../../../utils/utils';
import { useTheme } from '@mui/material/styles';
import { useCalendarContext } from '../../../calendar/calendar_context';
import { WeekGridCellEvent } from './week_grid_cell_event/week_grid_cell_event';

export const useWeekGridCell = (date: Date) => {
  const { setCalendarState, activeDate, occasions } = useCalendarContext();
  const theme = useTheme();

  const selected: boolean = datesAreSameDay(date, activeDate);

  const handleClick = (event: React.MouseEvent) => {
    setCalendarState({ activeDate: date });
    if (event.detail === 2) {
      //Do something on double click
    }
  };

  const filteredEvents: Occasion[] = filterEventsByDate(occasions, date);
  const eventElements = filteredEvents.map(({ id, title, color, from, to }) => {
    return (
      <WeekGridCellEvent key={id} title={title} color={color} date={date} from={from} to={to} />
    );
  });

  return {
    eventElements,
    handleClick,
    selected,
    theme,
  };
};
