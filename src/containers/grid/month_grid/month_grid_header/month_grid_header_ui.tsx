import { Box } from '@mui/material';
import React from 'react';

const styles = {
  container: {
    width: '100%',
    height: '30px',
    display: 'grid',
    gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
    gridTemplateRows: '1fr',
  },
};

export type MonthGridHeaderUIProps = {
  dayNames: React.ReactNode;
};

export const MonthGridHeaderUI = ({ dayNames }: MonthGridHeaderUIProps) => (
  <Box component='header' sx={styles.container}>
    {dayNames}
  </Box>
);
