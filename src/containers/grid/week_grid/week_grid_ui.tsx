import { Box } from '@mui/material';
import { WeekGridHeader } from './week_grid_header/week_grid_header';
import { WeekGridTime } from './week_grid_time/week_grid_time';

const styles = {
  container: {
    overflowY: 'scroll',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '50px 1fr',
    gridTemplateRows: '50px 1fr',
  },
  time: {
    gridRow: '2 / -1',
    gridColumn: '1 / -1',
  },
  header: {
    gridRow: '1',
    gridColumn: '1 / -1',
  },
  cells: {
    gridRow: '2 / -1',
    gridColumn: '2 / -1',
    flexGrow: 1,
    minHeight: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridTemplateRows: `1fr`,
  },
};

export type WeekGridUIProps = {
  gridCells: React.ReactNode;
};

export const WeekGridUI = ({ gridCells }: WeekGridUIProps) => {
  return (
    <Box component='section' sx={styles.container}>
      <Box sx={styles.time}>
        <WeekGridTime />
      </Box>

      <Box sx={styles.header}>
        <WeekGridHeader />
      </Box>

      <Box sx={styles.cells}>{gridCells}</Box>
    </Box>
  );
};
