import { Box } from "@mui/material";
import { WeekGridTimeUI } from "./week_grid_time_ui";
import { WeekGridTimeSection } from "./week_grid_time_section/week_grid_time_section";

export const WeekGridTime = () => {
  const sections = [...Array(24).keys()].map((hour, index) => (
    <WeekGridTimeSection key={index} hour={hour} />
  ));
  return <WeekGridTimeUI sections={sections} />;
};
