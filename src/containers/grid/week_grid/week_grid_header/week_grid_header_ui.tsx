import { Box } from '@mui/material';
import React from 'react';

export type WeekGridHeaderUIProps = {
  dayNames: React.ReactNode;
};

export const WeekGridHeaderUI = ({ dayNames }: WeekGridHeaderUIProps) => (
  <Box
    sx={{
      width: '100%',
      height: '50px',
      display: 'grid',
      gridTemplateColumns: '50px repeat(7, 1fr)',
      gridTemplateRows: '1fr',
    }}
  >
    {dayNames}
  </Box>
);
