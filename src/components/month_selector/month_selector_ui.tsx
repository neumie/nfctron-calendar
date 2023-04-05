import { Box, IconButton } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { ShiftDirection } from "./month_selector_hook";
import type { Dayjs } from "dayjs";

export type MonthSelectorUIProps = {
  activeDateDayjs: Dayjs;
  handleDateChange: (newDateDayjs: Dayjs | null) => void;
  handleDateShift: (direction: ShiftDirection) => void;
};

export const MonthSelectorUI = ({
  activeDateDayjs,
  handleDateChange,
  handleDateShift,
}: MonthSelectorUIProps) => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <IconButton onClick={() => handleDateShift("forward")} aria-label="up">
        <ArrowUpward />
      </IconButton>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={"year and month"}
          value={activeDateDayjs}
          onChange={handleDateChange}
          views={["year", "month"]}
        />
      </LocalizationProvider>

      <IconButton onClick={() => handleDateShift("backward")} aria-label="down">
        <ArrowDownward />
      </IconButton>
    </Box>
  );
};
