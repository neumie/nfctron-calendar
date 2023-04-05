import React from "react";

//MUI
import { Box } from "@mui/material";

//Components
import { Header } from "../header/header";
import { Grid } from "../grid/grid";
import { Legend } from "../legend/legend";

export const CalendarUI = () => {
  return (
    <Box
      component="main"
      sx={{
        width: "100vw",
        height: "100vh",
        display: "grid",
        gap: "1em",
        gridTemplateRows: "1fr 6fr",
        gridTemplateColumns: "3fr 1fr",
      }}
    >
      <Box
        sx={{
          gridRow: "1",
          gridColumn: "1 / -2",
          boxShadow: 2,
        }}
      >
        <Header />
      </Box>

      <Box
        sx={{
          gridRow: "2 / -1",
          gridColumn: "1 / -2",
          boxShadow: 2,
        }}
      >
        <Grid />
      </Box>

      <Box
        sx={{
          gridRow: "1 / -1",
          gridColumn: "-2",
          display: "flex",
          flexDirection: "column",
          boxShadow: 2,
        }}
      >
        <Legend />
      </Box>
    </Box>
  );
};
