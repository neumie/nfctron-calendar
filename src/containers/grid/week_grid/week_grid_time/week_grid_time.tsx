import { Box } from "@mui/material";
import { useWeekGridTime } from "./week_grid_time_hook";
import { WeekGridTimeUI } from "./week_grid_time_ui";

export const WeekGridTime = () => {
  const { sections } = useWeekGridTime();

  return <WeekGridTimeUI sections={sections} />;
};
