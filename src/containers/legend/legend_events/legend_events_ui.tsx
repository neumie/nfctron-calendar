import React from 'react';
import { Box } from '@mui/material';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  },
};

export type LegendEventsUIProps = {
  events?: React.ReactNode;
};

export const LegendEventsUI = ({ events }: LegendEventsUIProps) => (
  <Box sx={styles.container}>{events}</Box>
);
