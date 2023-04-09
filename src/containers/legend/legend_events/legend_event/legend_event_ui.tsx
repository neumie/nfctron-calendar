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
}: LegendEventUIProps) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: '1fr 2fr 1fr',
      gap: 2,
      borderLeft: 5,
      borderColor: color,
      padding: 1,
    }}
    onClick={onClick}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        whiteSpace: 'nowrap',
      }}
    >
      <Box>{from}</Box>
      <Box>{to}</Box>
    </Box>
    <Box
      sx={{
        overflowWrap: 'break-word',
        minWidth: 0,
      }}
    >
      {title}
    </Box>
    <Box>
      <IconButton onClick={onDelete} aria-label='delete'>
        <DeleteIcon />
      </IconButton>
    </Box>
  </Box>
);
