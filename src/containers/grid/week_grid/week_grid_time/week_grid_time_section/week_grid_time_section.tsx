import { Box } from "@mui/material";
import { WeekGridTimeSectionUI } from "./week_grid_time_section_ui";

export type WeekGridTimeSectionProps = {
  hour: number;
};

export const WeekGridTimeSection = ({ hour }: WeekGridTimeSectionProps) => {
  const sections = [...Array(24).keys()].map((hour) => <Box>{hour}</Box>);
  return <WeekGridTimeSectionUI hour={hour} />;
};
