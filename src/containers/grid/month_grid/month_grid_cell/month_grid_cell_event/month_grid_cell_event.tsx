import { useMonthGridCellEvent } from './month_grid_cell_event_hook';
import { MonthGridCellEventUI } from './month_grid_cell_event_ui';

export type MonthGridCellEventProps = {
  title: string;
  color: string;
};

export const MonthGridCellEvent = ({ title, color }: MonthGridCellEventProps) => {
  const { shortenedTitle } = useMonthGridCellEvent(title);

  return <MonthGridCellEventUI title={shortenedTitle} color={color} />;
};
