import { Box } from '@mui/material';

export type MonthGridCellEventUIProps = {
  title: string;
  color: string;
};

export const MonthGridCellEventUI = ({ title, color }: MonthGridCellEventUIProps) => (
  <Box
    sx={{
      backgroundColor: color,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }}
  >
    {title}
  </Box>
);
