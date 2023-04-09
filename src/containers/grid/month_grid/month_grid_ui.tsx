import { Box } from '@mui/material';
import { ReactNode } from 'react';
import { MonthGridHeader } from './month_grid_header/month_grid_header';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    minHeight: '0',
    minWidth: '0',
  },
};

export type MonthGridUIProps = {
  gridCells: ReactNode[];
  numberOfWeeks: number;
};

export const MonthGridUI = ({ gridCells, numberOfWeeks }: MonthGridUIProps) => (
  <Box sx={styles.container}>
    <MonthGridHeader />

    <Box
      sx={{
        flexGrow: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gridTemplateRows: `repeat(${numberOfWeeks}, 1fr)`,
      }}
    >
      {gridCells}
    </Box>
  </Box>
);
