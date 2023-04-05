import { Box } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type { Dayjs } from "dayjs";

export type WeekSelectorUIProps = {
  activeDateDayjs: Dayjs;
  handleWeekChange: (newDateDayjs: Dayjs | null) => void;
};

export const WeekSelectorUI = ({
  activeDateDayjs,
  handleWeekChange,
}: WeekSelectorUIProps) => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={"week"}
          value={activeDateDayjs}
          onChange={handleWeekChange}
          views={["day"]}
        />
      </LocalizationProvider>
    </Box>
  );
};
