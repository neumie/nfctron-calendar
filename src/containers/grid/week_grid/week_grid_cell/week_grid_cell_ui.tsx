import { Box } from '@mui/material';
import { Theme, alpha } from '@mui/material';
import React from 'react';

export type WeekGridCellUIProps = {
  events: React.ReactNode;
  onClick: (event: React.MouseEvent) => void;
  theme: Theme;
  selected: boolean;
};

export const WeekGridCellUI = ({ events, onClick, selected, theme }: WeekGridCellUIProps) => (
  <Box
    onClick={onClick}
    sx={[
      {
        border: 0.5,
        borderColor: 'grey.300',
        minWidth: 0,
        overflow: 'hidden',
        display: 'grid',
        gridTemplateRows: 'repeat(48, 1fr)',
        gridAutoColumns: '1fr',
      },
      selected && {
        backgroundColor: alpha(theme.palette.primary.main, 0.2),
      },
    ]}
  >
    {events}
  </Box>
);
