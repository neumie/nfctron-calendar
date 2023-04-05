import { MonthGridUI } from "./month_grid_ui";
import { useMonthGrid } from "./month_grid_hook";
import { GridCell } from "../../../components/grid_cell/grid_cell";

export const MonthGrid = () => {
  const { activeDate } = useMonthGrid();
  //Array s 31 GridCellama
  //Každá GridCella bude brat pres props
  //DATUM
  const cells = generateMonthArray(activeDate);
  const gridCells = cells.map((cell) => <GridCell date={cell} />);

  return <MonthGridUI gridCells={gridCells} />;
};

const generateMonthArray = (date: Date) => {
  const days: Date[] = [];
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  //Make sure that the first day is a monday
  while (firstDay.getDay() !== 1) {
    firstDay.setDate(firstDay.getDate() - 1);
  }

  //Make sure that the last day is a sunday
  while (lastDay.getDay() !== 0) {
    lastDay.setDate(lastDay.getDate() + 1);
  }

  const currentDay = new Date(firstDay.getTime());
  while (currentDay <= lastDay) {
    days.push(new Date(currentDay.getTime()));
    currentDay.setDate(currentDay.getDate() + 1);
  }

  return days;
};
