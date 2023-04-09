import { Theme, alpha } from '@mui/material';
import { Box } from '@mui/material';
import React from 'react';

export type MonthGridCellUIProps = {
  today: boolean;
  selected: boolean;
  day: number;
  month?: string;
  theme: Theme;
  onClick: (event: React.MouseEvent) => void;
  events: React.ReactNode;
};

export const MonthGridCellUI = ({
  today,
  selected,
  day,
  month,
  theme,
  onClick,
  events,
}: MonthGridCellUIProps) => (
  <Box
    onClick={onClick}
    sx={[
      {
        minWidth: 0,
        border: 0.5,
        borderColor: 'grey.300',
        overflow: 'hidden',
      },
      today && {
        borderTopWidth: '5px',
        borderTopColor: 'primary.main',
      },
      !today && {
        paddingTop: '5px',
      },
      selected && {
        backgroundColor: alpha(theme.palette.primary.main, 0.2),
      },
    ]}
  >
    {month} {day}
    {events}
  </Box>
);
