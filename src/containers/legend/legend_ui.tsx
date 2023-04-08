import { EventEditor } from "../../components/event_editor/event_editor";
import { LegendEvents } from "./legend_events/legend_events";
import { LegendHeader } from "./legend_header/legend_header";
import { Box } from "@mui/material";

export const LegendUI = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        height: "100vh",
      }}
    >
      <LegendHeader />
      <Box
        sx={{
          padding: 2,
          overflowY: "scroll",
        }}
      >
        <LegendEvents />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: 2,
        }}
      >
        <EventEditor />
      </Box>
    </Box>
  );
};
