import { Box } from '@mui/material';
import React from 'react';

const styles = {
  container: {
    width: '100%',
    height: '50px',
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridTemplateRows: '1fr',
  },
};

export type MonthGridHeaderUIProps = {
  dayNames: React.ReactNode;
};

export const MonthGridHeaderUI = ({ dayNames }: MonthGridHeaderUIProps) => (
  <Box sx={styles.container}>{dayNames}</Box>
);
