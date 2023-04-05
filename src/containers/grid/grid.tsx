import React from "react";

import { WeekGrid } from "../../containers/grid/week_grid";
import { MonthGrid } from "../../containers/grid/month_grid";
import { Box, SxProps, Theme } from "@mui/material";

type GridProps = {
  sx?: SxProps<Theme>;
};

export const Grid = ({ sx }: GridProps) => {
  return (
    <Box
      sx={[
        ...(Array.isArray(sx) ? sx : [sx]), //Can't spread directly, because SxProps can be an array
      ]}
    ></Box>
  );
};
