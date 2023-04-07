import { MonthGridCellEventUI } from "./month_grid_cell_event_ui";
// import { useGridCellEvent } from "./grid_cell_event_hook";

export type MonthGridCellEventProps = {
  title: string;
  color: string;
};

export const MonthGridCellEvent = ({
  title,
  color,
}: MonthGridCellEventProps) => {
  return <MonthGridCellEventUI title={title} color={color} />;
};
