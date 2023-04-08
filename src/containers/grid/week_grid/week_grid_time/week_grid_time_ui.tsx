import { Box } from "@mui/material";
import React from "react";

export type WeekGridTimeUIProps = {
  sections: React.ReactNode[];
};

export const WeekGridTimeUI = ({ sections }: WeekGridTimeUIProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "repeat(24, 50px)",
      }}
    >
      {sections}
    </Box>
  );
};
