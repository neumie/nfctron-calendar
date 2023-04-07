import { GridCellEventUI } from "./grid_cell_event_ui";
// import { useGridCellEvent } from "./grid_cell_event_hook";

export type GridCellEventProps = {
  title: string;
  color: string;
};

export const GridCellEvent = ({ title, color }: GridCellEventProps) => {
  return <GridCellEventUI title={title} color={color} />;
};
