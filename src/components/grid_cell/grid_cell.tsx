import { GridCellUI } from "./grid_cell_ui";
import { useGridCell } from "./grid_cell_hook";

export type GridCellProps = {
  date: Date;
};

export const GridCell = ({ date }: GridCellProps) => {
  const today: boolean = datesAreSameDay(date, new Date());
  const day: number = date.getDate();

  let month: string = "";
  if (day === 1) {
    month = date.toLocaleString("default", { month: "short" });
  }

  return <GridCellUI today={today} day={day} month={month} />;
};

const datesAreSameDay = (firstDate: Date, secondDate: Date): boolean => {
  return (
    firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getDate() === secondDate.getDate()
  );
};
