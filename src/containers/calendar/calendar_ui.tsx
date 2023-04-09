import { Box } from '@mui/material';
import { Header } from '../header/header';
import { Grid } from '../grid/grid';
import { Legend } from '../legend/legend';

const styles = {
  container: {
    width: '100vw',
    height: {
      xs: 'auto',
      md: '100vh',
    },
    display: 'grid',
    gap: '1em',
    gridTemplateRows: {
      xs: 'auto 75vh auto',
      md: 'auto 6fr',
    },
    gridTemplateColumns: {
      xs: '1fr',
      md: '3fr auto',
    },
  },
  header: {
    gridRow: '1',
    gridColumn: {
      xs: '1',
      md: '1 / -2',
    },
    boxShadow: 2,
  },
  grid: {
    gridRow: {
      xs: '2',
      md: '2 / -1',
    },
    gridColumn: {
      xs: '1',
      md: '1 / -2',
    },
    minHeight: 0,
    boxShadow: 2,
  },
  legend: {
    maxWidth: {
      xs: 'auto',
      md: '315px',
    },
    gridRow: {
      xs: '3',
      md: '1 / -1',
    },
    gridColumn: {
      xs: '1',
      md: '-2',
    },
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
