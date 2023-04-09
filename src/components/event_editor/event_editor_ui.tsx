import { Box, IconButton, TextField } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material/';
import { Edit as EditIcon } from '@mui/icons-material';
import { Close as CloseIcon } from '@mui/icons-material';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import 'dayjs/locale/en-gb';
import { TwitterPicker as ColorPicker } from 'react-color';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { EventState } from './event_editor_hook';

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
  button: {
    marginTop: 1.5,
  },
};

export type EventEditorUIProps = {
  onEventAdd: (e: React.MouseEvent<HTMLElement>) => void;
  eventTitle: string;
  eventFromDateDayjs: Dayjs;
  eventFromTimeDayjs: Dayjs;
  eventToDateDayjs: Dayjs;
  eventToTimeDayjs: Dayjs;
  eventColor: string;
  selectedEventId: string;
  onEventEdit: (e: React.MouseEvent<HTMLElement>) => void;
  onResetEditor: () => void;
  onFormStateChange: <T extends keyof EventState>(
    field: T,
    value: EventState[T] | Dayjs | null,
    shouldLock?: boolean,
  ) => void;
};

export const EventEditorUI = ({
  onEventAdd,
  eventTitle,
  eventFromDateDayjs,
  eventFromTimeDayjs,
  eventToDateDayjs,
  eventToTimeDayjs,
  eventColor,
  selectedEventId,
  onEventEdit,
  onResetEditor,
  onFormStateChange,
}: EventEditorUIProps) => {
  const buttonGroup = {
    add: (
      <IconButton
        type='submit'
        sx={styles.button}
        onClick={(e) => onEventAdd(e)}
        aria-label='add event'
      >
        <AddIcon />
      </IconButton>
    ),
    edit: (
      <>
        <IconButton
          type='submit'
          sx={styles.button}
          onClick={(e) => onEventEdit(e)}
          aria-label='edit event'
        >
          <EditIcon />
        </IconButton>
      </>
    ),
  };

  return (
    <Box component='form' sx={styles.container}>
      <Box sx={styles.topRow}>
        <TextField
          sx={{
            width: '180px',
          }}
          id='title'
          label='event name'
          variant='standard'
          value={eventTitle}
          onChange={(e) => onFormStateChange('title', e.target.value)}
        />
        {selectedEventId ? buttonGroup.edit : buttonGroup.add}
        <IconButton sx={styles.button} onClick={onResetEditor} aria-label='exit editing mode'>
          <CloseIcon />
        </IconButton>
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
            onChange={(e) => onFormStateChange('fromDate', e, true)}
          />
          <TimePicker
            sx={styles.timePicker}
            value={eventFromTimeDayjs}
            onChange={(e) => onFormStateChange('fromTime', e, false)}
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
            onChange={(e) => onFormStateChange('toDate', e, true)}
          />
          <TimePicker
            sx={styles.timePicker}
            value={eventToTimeDayjs}
            onChange={(e) => onFormStateChange('toTime', e, false)}
          />
        </Box>
      </LocalizationProvider>

      {/* COLOR PICKER */}
      <Box
        sx={{
          marginLeft: 0.5,
        }}
      >
        <ColorPicker color={eventColor} onChange={(e) => onFormStateChange('color', e.hex)} />
      </Box>
    </Box>
  );
};
