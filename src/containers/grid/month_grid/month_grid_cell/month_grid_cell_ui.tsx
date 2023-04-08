import { Theme, alpha } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";

export type MonthGridCellUIProps = {
  today: boolean;
  selected: boolean;
  day: number;
  month?: string;
  theme: Theme;
  onClick: (event: React.MouseEvent) => void;
  events: React.ReactNode;
};

export const MonthGridCellUI = ({
  today,
  selected,
  day,
  month,
  theme,
  onClick,
  events,
}: MonthGridCellUIProps) => {
  return (
    <Box
      onClick={onClick}
      sx={[
        {
          minWidth: 0,
          padding: "0.25em",
          border: 0.5,
          borderColor: "grey.300",
          overflow: "hidden",
        },
        today && {
          borderTop: 4,
          borderTopColor: "primary.main",
        },
        selected && {
          backgroundColor: alpha(theme.palette.primary.main, 0.2),
        },
      ]}
    >
      {month} {day}
      {events}
    </Box>
  );
};
