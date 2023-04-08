import { useWeekGrid } from "./week_grid_hook";
import { WeekGridUI } from "./week_grid_ui";

export const WeekGrid = () => {
  const { gridCells } = useWeekGrid();

  return <WeekGridUI gridCells={gridCells} />;
};
