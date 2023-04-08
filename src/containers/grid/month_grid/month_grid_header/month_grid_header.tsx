import { MonthGridHeaderUI } from "./month_grid_header_ui";
import { dayNames } from "../../../../utils/utils";
import { Box } from "@mui/material";

export const MonthGridHeader = () => {
  const dayNameElements = dayNames.map((dayName, index) => (
    <Box key={index}>{dayName}</Box>
  ));
  return <MonthGridHeaderUI dayNames={dayNameElements} />;
};
