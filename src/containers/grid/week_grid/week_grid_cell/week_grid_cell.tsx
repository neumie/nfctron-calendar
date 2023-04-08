import { useWeekGridCell } from './week_grid_cell_hook';
import { WeekGridCellUI } from './week_grid_cell_ui';

export type WeekGridCellProps = {
  date: Date;
};

export const WeekGridCell = ({ date }: WeekGridCellProps) => {
  const { eventElements, handleClick } = useWeekGridCell(date);

  return <WeekGridCellUI events={eventElements} onClick={handleClick} />;
};
