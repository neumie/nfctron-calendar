import { Box } from '@mui/material';
import { DateSelector } from '../../components/date_selector/date_selector';
import { ViewSelector } from '../../components/view_selector/view_selector';
import { TodayButton } from '../../components/today_button/today_button';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1em 2em',
  },
};

export const HeaderUI = () => (
  <Box component='header' sx={styles.container}>
    <TodayButton />
    <DateSelector />
    <ViewSelector />
  </Box>
);
