import { Box, IconButton } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import React from 'react';

export type LegendEventUIProps = {
  title: string;
  from: string;
  to: string;
  color: string;
  onDelete: (event: React.MouseEvent<HTMLElement>) => void;
  onClick: () => void;
};

export const LegendEventUI = ({
  title,
  from,
  to,
  color,
  onDelete,
  onClick,
}: LegendEventUIProps) => {
  const styles = {
    container: {
      maxWidth: '450px',
      display: 'grid',
      gridTemplateColumns: '1fr 2fr 1fr',
      gap: 2,
      borderLeft: 5,
      borderColor: color,
      padding: 1,
    },
    time: {
      display: 'flex',
      flexDirection: 'column',
      whiteSpace: 'nowrap',
    },
    title: {
      wordBreak: 'break-word',
    },
    delete: {
      marginLeft: 'auto',
    },
  };

  return (
    <Box sx={styles.container} onClick={onClick}>
      <Box sx={styles.time}>
        <Box>{from}</Box>
        <Box>{to}</Box>
      </Box>
      <Box sx={styles.title}>{title}</Box>
      <Box sx={styles.delete}>
        <IconButton onClick={onDelete} aria-label='delete'>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
