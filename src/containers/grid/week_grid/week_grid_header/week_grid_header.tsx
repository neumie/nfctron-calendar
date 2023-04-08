import { WeekGridHeaderUI } from "./week_grid_header_ui";
import { useWeekGridHeader } from "./week_grid_header_hook";

export const WeekGridHeader = () => {
  const { dayNameElements } = useWeekGridHeader();

  return <WeekGridHeaderUI dayNames={dayNameElements} />;
};
