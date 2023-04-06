import { Box, TextField } from "@mui/material";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { TwitterPicker as ColorPicker } from "react-color";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import React from "react";
import { ColorResult } from "react-color";

export type EventEditorUIProps = {
  eventTitle: string;
  onEventTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  eventFromDayjs: Dayjs;
  onEventFromChange: (newEventFrom: Dayjs | null) => void;
  eventFromTimeDayjs: Dayjs;
  onEventFromTimeChange: (newEventFromTime: Dayjs | null) => void;
  eventToDayjs: Dayjs;
  onEventToChange: (newEventTo: Dayjs | null) => void;
  eventToTimeDayjs: Dayjs;
  onEventToTimeChange: (newEventToTime: Dayjs | null) => void;
  eventColor: string;
  onEventColorChange: (newEventColor: ColorResult) => void;
};

export const EventEditorUI = ({
  eventTitle,
  onEventTitleChange,
  eventFromDayjs,
  onEventFromChange,
  eventFromTimeDayjs,
  onEventFromTimeChange,
  eventToDayjs,
  onEventToChange,
  eventToTimeDayjs,
  onEventToTimeChange,
  eventColor,
  onEventColorChange,
}: EventEditorUIProps) => {
  const datePickerStyle = {
    width: "175px",
  };

  const timePickerStyle = {
    width: "100px",
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <TextField
        sx={{
          width: "200px",
        }}
        id="title"
        label="event name"
        variant="standard"
        value={eventTitle}
        onChange={onEventTitleChange}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <DatePicker
            sx={datePickerStyle}
            label="From"
            value={eventFromDayjs}
            onChange={onEventFromChange}
          />
          <TimePicker
            sx={timePickerStyle}
            value={eventFromTimeDayjs}
            onChange={onEventFromTimeChange}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <DatePicker
            sx={datePickerStyle}
            label="To"
            value={eventToDayjs}
            onChange={onEventToChange}
          />
          <TimePicker
            sx={timePickerStyle}
            value={eventToTimeDayjs}
            onChange={onEventToTimeChange}
          />
        </Box>
      </LocalizationProvider>

      <Box
        sx={{
          marginLeft: 0.5,
        }}
      >
        <ColorPicker color={eventColor} onChange={onEventColorChange} />
      </Box>
    </Box>
  );
};
