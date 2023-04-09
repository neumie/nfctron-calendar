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
}: MonthGridCellUIProps) => {
  const styles = {
    container: {
      minWidth: 0,
      border: 0.5,
      borderColor: 'grey.300',
      overflow: 'hidden',
    },
    today: {
      borderTopWidth: '5px',
      borderTopColor: 'primary.main',
    },
    notToday: {
      paddingTop: '5px',
    },
    selected: {
      backgroundColor: alpha(theme.palette.primary.main, 0.2),
    },
    time: {
      marginLeft: 1,
    },
  };

  return (
    <Box
      onClick={onClick}
      sx={[
        styles.container,
        today && styles.today,
        !today && styles.notToday,
        selected && styles.selected,
      ]}
    >
      <Box sx={styles.time}>
        {month} {day}
      </Box>
      {events}
    </Box>
  );
};
