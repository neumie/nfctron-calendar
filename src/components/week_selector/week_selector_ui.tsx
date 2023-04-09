import { Box } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import type { Dayjs } from 'dayjs';
import 'dayjs/locale/en-gb';

const styles = {
  container: {
    display: 'flex',
  },
};

export type WeekSelectorUIProps = {
  activeDateDayjs: Dayjs;
  onWeekChange: (newDateDayjs: Dayjs | null) => void;
};

export const WeekSelectorUI = ({ activeDateDayjs, onWeekChange }: WeekSelectorUIProps) => (
  <Box sx={styles.container}>
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb'>
      <DatePicker label={'week'} value={activeDateDayjs} onChange={onWeekChange} views={['day']} />
    </LocalizationProvider>
  </Box>
);
