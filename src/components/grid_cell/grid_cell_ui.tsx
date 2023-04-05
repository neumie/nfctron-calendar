import { Box } from "@mui/material";

export type GridCellUIProps = {
  day: number;
  month?: string;
};

export const GridCellUI = ({ day, month }: GridCellUIProps) => {
  return (
    <Box
      sx={{
        padding: "0.25em",
        border: 0.5,
        borderColor: "grey.300",
      }}
    >
      {month} {day}
    </Box>
  );
};
