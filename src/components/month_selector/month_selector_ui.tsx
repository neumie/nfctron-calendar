import { Box, IconButton } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { ShiftDirection } from './../../utils/date';
import type { Dayjs } from 'dayjs';
import 'dayjs/locale/en-gb';

export type MonthSelectorUIProps = {
  activeDateDayjs: Dayjs;
  onDateChange: (newDateDayjs: Dayjs | null) => void;
  onDateShift: (direction: ShiftDirection) => void;
};

export const MonthSelectorUI = ({
  activeDateDayjs,
  onDateChange,
  onDateShift,
}: MonthSelectorUIProps) => (
  <Box
    sx={{
      display: 'flex',
    }}
  >
    <IconButton onClick={() => onDateShift('backward')} aria-label='down'>
      <ArrowDownward />
    </IconButton>

    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb'>
      <DatePicker
        label={'year and month'}
        value={activeDateDayjs}
        onChange={onDateChange}
        views={['year', 'month']}
      />
    </LocalizationProvider>

    <IconButton onClick={() => onDateShift('forward')} aria-label='up'>
      <ArrowUpward />
    </IconButton>
  </Box>
);
