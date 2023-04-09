import { Box } from '@mui/material';
import { DateSelector } from '../../components/date_selector/date_selector';
import { ViewSelector } from '../../components/view_selector/view_selector';
import { TodayButton } from '../../components/today_button/today_button';

const styles = {
  container: {
    display: {
      xs: 'grid',
      md: 'flex',
    },
    gap: 2,
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1em 2em',
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
  },
};

export const HeaderUI = () => (
  <Box component='header' sx={styles.container}>
    <Box sx={[styles.centered, { gridColumn: '1' }]}>
      <TodayButton />
    </Box>
    <Box sx={[styles.centered, { gridRow: '2', gridColumn: '1 / -1' }]}>
      <DateSelector />
    </Box>
    <Box sx={styles.centered}>
      <ViewSelector />
    </Box>
  </Box>
);
