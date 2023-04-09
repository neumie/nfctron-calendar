import { Box } from '@mui/material';
import { Header } from '../header/header';
import { Grid } from '../grid/grid';
import { Legend } from '../legend/legend';

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    display: 'grid',
    gap: '1em',
    gridTemplateRows: 'auto 6fr',
    gridTemplateColumns: '3fr 1fr',
  },
  header: {
    gridRow: '1',
    gridColumn: '1 / -2',
    boxShadow: 2,
  },
  grid: {
    gridRow: '2 / -1',
    gridColumn: '1 / -2',
    minHeight: 0,
    boxShadow: 2,
  },
  legend: {
    gridRow: '1 / -1',
    gridColumn: '-2',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 2,
  },
};

export const CalendarUI = () => (
  <Box component='main' sx={styles.container}>
    <Box sx={styles.header}>
      <Header />
    </Box>

    <Box sx={styles.grid}>
      <Grid />
    </Box>

    <Box sx={styles.legend}>
      <Legend />
    </Box>
  </Box>
);
