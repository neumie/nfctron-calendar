import { MonthSelector } from "../../components/month_selector/month_selector";
import { ViewSelector } from "../../components/view_selector/view_selector";
import { Box } from "@mui/material";
import { TodayButton } from "../../components/today_button/today_button";

export const HeaderUI = () => {
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "2em",
        paddingRight: "2em",
      }}
    >
      <TodayButton />
      <MonthSelector />
      <ViewSelector />
    </Box>
  );
};
