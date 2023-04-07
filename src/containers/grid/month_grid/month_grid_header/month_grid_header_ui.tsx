import { Box } from "@mui/material";
import React from "react";

export type MonthGridHeaderUIProps = {
  dayNames: React.ReactNode;
};

export const MonthGridHeaderUI = ({ dayNames }: MonthGridHeaderUIProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "50px",
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gridTemplateRows: "1fr",
      }}
    >
      {dayNames}
    </Box>
  );
};
