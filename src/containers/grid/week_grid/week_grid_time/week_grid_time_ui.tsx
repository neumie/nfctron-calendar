import { Box } from '@mui/material';
import React from 'react';

const styles = {
  container: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'repeat(24, 50px)',
  },
};

export type WeekGridTimeUIProps = {
  sections: React.ReactNode[];
};

export const WeekGridTimeUI = ({ sections }: WeekGridTimeUIProps) => (
  <Box sx={styles.container}>{sections}</Box>
);
