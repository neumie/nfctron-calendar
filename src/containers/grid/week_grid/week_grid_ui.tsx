import { Box } from "@mui/material";
import { WeekGridHeader } from "./week_grid_header/week_grid_header";
import { WeekGridTime } from "./week_grid_time/week_grid_time";

export type WeekGridUIProps = {
  gridCells: React.ReactNode;
};

export const WeekGridUI = ({ gridCells }: WeekGridUIProps) => {
  return (
    <Box
      sx={{
        overflow: "scroll",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "50px 1fr",
        gridTemplateRows: "50px 1fr",
      }}
    >
      <Box
        sx={{
          gridRow: "2 / -1",
          gridColumn: "1 / -1",
        }}
      >
        <WeekGridTime />
      </Box>

      <Box
        sx={{
          gridRow: "1",
          gridColumn: "1 / -1",
        }}
      >
        <WeekGridHeader />
      </Box>

      <Box
        sx={{
          gridRow: "2 / -1",
          gridColumn: "2 / -1",
          flexGrow: 1,
          minHeight: 0,
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gridTemplateRows: `1fr`,
        }}
      >
        {gridCells}
      </Box>
    </Box>
  );
};
