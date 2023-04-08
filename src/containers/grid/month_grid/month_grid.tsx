import { MonthGridUI } from "./month_grid_ui";
import { useMonthGrid } from "./month_grid_hook";

export const MonthGrid = () => {
  const { gridCells, numberOfWeeks } = useMonthGrid();

  return <MonthGridUI gridCells={gridCells} numberOfWeeks={numberOfWeeks} />;
};
