import { GridCellUI } from "./grid_cell_ui";
import { useGridCell } from "./grid_cell_hook";

export type GridCellProps = {
  date: Date;
};
export const GridCell = ({ date }: GridCellProps) => {
  const day: number = date.getDate();

  let month: string = "";
  if (day === 1) {
    month = date.toLocaleString("default", { month: "short" });
  }

  return <GridCellUI day={day} month={month} />;
};
