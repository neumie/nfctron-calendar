import { Box } from "@mui/material";
import { ReactNode } from "react";

export type MonthGridUIProps = {
  gridCells: ReactNode[];
};

export const MonthGridUI = ({ gridCells }: MonthGridUIProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
      }}
    >
      {gridCells}
    </Box>
  );
};
