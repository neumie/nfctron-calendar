import { useWeekGridCellEvent } from './week_grid_cell_event_hook';
import { WeekGridCellEventUI } from './week_grid_cell_event_ui';

export type WeekGridCellEventProps = {
  date: Date;
  title: string;
  color: string;
  from: Date;
  to: Date;
};

export const WeekGridCellEvent = ({ date, title, color, from, to }: WeekGridCellEventProps) => {
  const { fromGrid, toGrid } = useWeekGridCellEvent(date, from, to);

  return <WeekGridCellEventUI title={title} color={color} from={fromGrid} to={toGrid} />;
};
