import { Box } from "@mui/material";
import { ReactNode } from "react";

export type MonthGridUIProps = {
  gridCells: ReactNode[];
  numberOfWeeks: number;
};

export const MonthGridUI = ({ gridCells, numberOfWeeks }: MonthGridUIProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gridTemplateRows: `repeat(${numberOfWeeks}, 1fr)`,
      }}
    >
      {gridCells}
    </Box>
  );
};
