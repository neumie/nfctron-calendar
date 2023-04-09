import { Box } from '@mui/material';
import React from 'react';

const styles = {
  container: {
    width: '100%',
    height: '50px',
    display: 'grid',
    gridTemplateColumns: '50px repeat(7, 1fr)',
    gridTemplateRows: '1fr',
  },
};

export type WeekGridHeaderUIProps = {
  dayNames: React.ReactNode;
};

export const WeekGridHeaderUI = ({ dayNames }: WeekGridHeaderUIProps) => (
  <Box sx={styles.container}>{dayNames}</Box>
);
