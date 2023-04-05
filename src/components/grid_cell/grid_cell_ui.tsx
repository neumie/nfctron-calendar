import { Box } from "@mui/material";
import { Primary } from "../../stories/Button.stories";

export type GridCellUIProps = {
  today: boolean;
  day: number;
  month?: string;
};

export const GridCellUI = ({ today, day, month }: GridCellUIProps) => {
  return (
    <Box
      sx={[
        {
          padding: "0.25em",
          border: 0.5,
          borderColor: "grey.300",
        },
        today && {
          borderTop: 4,
          borderTopColor: "primary.main",
        },
      ]}
    >
      {month} {day}
    </Box>
  );
};
