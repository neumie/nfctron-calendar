import { Box, IconButton, TextField } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material/";
import { Edit as EditIcon } from "@mui/icons-material";
import { Close as CloseIcon } from "@mui/icons-material";
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
  onEventAdd: () => void;
  eventTitle: string;
  onEventTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  eventFromDateDayjs: Dayjs;
  onEventFromChange: (newEventFrom: Dayjs | null) => void;
  eventFromTimeDayjs: Dayjs;
  onEventFromTimeChange: (newEventFromTime: Dayjs | null) => void;
  eventToDateDayjs: Dayjs;
  onEventToChange: (newEventTo: Dayjs | null) => void;
  eventToTimeDayjs: Dayjs;
  onEventToTimeChange: (newEventToTime: Dayjs | null) => void;
  eventColor: string;
  onEventColorChange: (newEventColor: ColorResult) => void;
  selectedEventId: string;
  onEventEdit: () => void;
  onExitEditMode: () => void;
};

export const EventEditorUI = ({
  onEventAdd,
  eventTitle,
  onEventTitleChange,
  eventFromDateDayjs,
  onEventFromChange,
  eventFromTimeDayjs,
  onEventFromTimeChange,
  eventToDateDayjs,
  onEventToChange,
  eventToTimeDayjs,
  onEventToTimeChange,
  eventColor,
  onEventColorChange,
  selectedEventId,
  onEventEdit,
  onExitEditMode,
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
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
        {/* ADD OR EDIT BUTTON */}
        {selectedEventId ? (
          <>
            <IconButton
              sx={{
                marginTop: 1.5,
              }}
              onClick={onEventEdit}
              aria-label="edit event"
            >
              <EditIcon />
            </IconButton>
            <IconButton
              sx={{
                marginTop: 1.5,
              }}
              onClick={onExitEditMode}
              aria-label="exit editing mode"
            >
              <CloseIcon />
            </IconButton>
          </>
        ) : (
          <IconButton
            sx={{
              marginTop: 1.5,
            }}
            onClick={onEventAdd}
            aria-label="add event"
          >
            <AddIcon />
          </IconButton>
        )}
      </Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* FROM DATE PICKER */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <DatePicker
            sx={datePickerStyle}
            label="From"
            value={eventFromDateDayjs}
            onChange={onEventFromChange}
          />
          <TimePicker
            sx={timePickerStyle}
            value={eventFromTimeDayjs}
            onChange={onEventFromTimeChange}
          />
        </Box>

        {/* TO DATE PICKER */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <DatePicker
            sx={datePickerStyle}
            label="To"
            value={eventToDateDayjs}
            onChange={onEventToChange}
          />
          <TimePicker
            sx={timePickerStyle}
            value={eventToTimeDayjs}
            onChange={onEventToTimeChange}
          />
        </Box>
      </LocalizationProvider>

      {/* COLOR PICKER */}
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
