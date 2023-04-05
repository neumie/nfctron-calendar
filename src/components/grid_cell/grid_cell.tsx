import { GridCellUI } from "./grid_cell_ui";
import { useGridCell } from "./grid_cell_hook";
import { useTheme } from "@mui/material/styles";

export type GridCellProps = {
  date: Date;
};

export const GridCell = ({ date }: GridCellProps) => {
  const theme = useTheme();
  const { setCalendarState, activeDate } = useGridCell();

  const selected: boolean = datesAreSameDay(date, activeDate);
  const today: boolean = datesAreSameDay(date, new Date());
  const day: number = date.getDate();

  let month: string = "";
  if (day === 1) {
    month = date.toLocaleString("default", { month: "short" });
  }

  const handleClick = () => {
    setCalendarState({ activeDate: date });
  };

  return (
    <GridCellUI
      today={today}
      selected={selected}
      day={day}
      month={month}
      onClick={handleClick}
      theme={theme}
    />
  );
};

const datesAreSameDay = (firstDate: Date, secondDate: Date): boolean => {
  return (
    firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getDate() === secondDate.getDate()
  );
};
