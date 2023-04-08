import { WeekGridHeaderUI } from "./week_grid_header_ui";
import { dayNames } from "../../../../utils/utils";
import { Box } from "@mui/material";

export const WeekGridHeader = () => {
  const dayNameElements = dayNames.map((dayName, index) => (
    <Box sx={{ border: 0.5, borderColor: "grey.300" }} key={index}>
      {dayName}
    </Box>
  ));
  //Add the corner piece
  dayNameElements.unshift(<Box key={"corner"}></Box>);
  return <WeekGridHeaderUI dayNames={dayNameElements} />;
};
