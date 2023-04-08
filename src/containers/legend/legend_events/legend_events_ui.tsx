import React from "react";
import { Box } from "@mui/material";

export type LegendEventsUIProps = {
  events?: React.ReactNode;
};

export const LegendEventsUI = ({ events }: LegendEventsUIProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      {events}
    </Box>
  );
};
