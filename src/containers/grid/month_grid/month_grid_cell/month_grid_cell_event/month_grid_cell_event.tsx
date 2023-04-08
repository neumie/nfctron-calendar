import { MonthGridCellEventUI } from './month_grid_cell_event_ui';

export type MonthGridCellEventProps = {
  title: string;
  color: string;
};

export const MonthGridCellEvent = ({ title, color }: MonthGridCellEventProps) => (
  <MonthGridCellEventUI title={title} color={color} />
);
