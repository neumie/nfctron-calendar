import { Box, IconButton, TextField } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material/';
import { Edit as EditIcon } from '@mui/icons-material';
import { Close as CloseIcon } from '@mui/icons-material';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import 'dayjs/locale/en-gb';
import { TwitterPicker as ColorPicker } from 'react-color';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import React from 'react';
import { ColorResult } from 'react-color';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  },
  topRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },
  datePicker: {
    width: '175px',
  },
  timePicker: {
    width: '100px',
  },
};

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
  const buttonGroup = {
    add: (
      <IconButton
        sx={{
          marginTop: 1.5,
        }}
        onClick={onEventAdd}
        aria-label='add event'
      >
        <AddIcon />
      </IconButton>
    ),
    edit: (
      <>
        <IconButton
          sx={{
            marginTop: 1.5,
          }}
          onClick={onEventEdit}
          aria-label='edit event'
        >
          <EditIcon />
        </IconButton>
        <IconButton
          sx={{
            marginTop: 1.5,
          }}
          onClick={onExitEditMode}
          aria-label='exit editing mode'
        >
          <CloseIcon />
        </IconButton>
      </>
    ),
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.topRow}>
        <TextField
          sx={{
            width: '200px',
          }}
          id='title'
          label='event name'
          variant='standard'
          value={eventTitle}
          onChange={onEventTitleChange}
        />
        {selectedEventId ? buttonGroup.edit : buttonGroup.add}
      </Box>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb'>
        {/* FROM DATE PICKER */}
        <Box
          sx={{
            display: 'flex',
            gap: 1,
          }}
        >
          <DatePicker
            sx={styles.datePicker}
            label='From'
            value={eventFromDateDayjs}
            onChange={onEventFromChange}
          />
          <TimePicker
            sx={styles.timePicker}
            value={eventFromTimeDayjs}
            onChange={onEventFromTimeChange}
          />
        </Box>

        {/* TO DATE PICKER */}
        <Box
          sx={{
            display: 'flex',
            gap: 1,
          }}
        >
          <DatePicker
            sx={styles.datePicker}
            label='To'
            value={eventToDateDayjs}
            onChange={onEventToChange}
          />
          <TimePicker
            sx={styles.timePicker}
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
