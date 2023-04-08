import { useMonthGridCell } from './month_grid_cell_hook';
import { MonthGridCellUI } from './month_grid_cell_ui';

export type MonthGridCellProps = {
  date: Date;
};

export const MonthGridCell = ({ date }: MonthGridCellProps) => {
  const { theme, today, selected, day, month, handleClick, eventElements } = useMonthGridCell(date);

  return (
    <MonthGridCellUI
      today={today}
      selected={selected}
      day={day}
      month={month}
      onClick={handleClick}
      theme={theme}
      events={eventElements}
    />
  );
};
