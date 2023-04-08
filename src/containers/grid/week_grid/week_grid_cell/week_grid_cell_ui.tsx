import { Box } from "@mui/material";
import React from "react";

export type WeekGridCellUIProps = {
  events: React.ReactNode;
  onClick: (event: React.MouseEvent) => void;
};

export const WeekGridCellUI = ({ events, onClick }: WeekGridCellUIProps) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        border: 0.5,
        borderColor: "grey.300",
        minWidth: 0,
        overflow: "hidden",
        display: "grid",
        gridTemplateRows: "repeat(48, 1fr)", //Add dependency
      }}
    >
      {events}
    </Box>
  );
};
