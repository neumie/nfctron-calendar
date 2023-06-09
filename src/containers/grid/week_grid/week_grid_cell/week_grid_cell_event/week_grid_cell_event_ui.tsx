import { Box } from '@mui/material';
import { Theme, alpha } from '@mui/material';

export type WeekGridCellEventUIProps = {
  title: string;
  color: string;
  from: number;
  to: number;
  theme: Theme;
};

export const WeekGridCellEventUI = ({ title, color, from, to }: WeekGridCellEventUIProps) => {
  const styles = {
    container: {
      backgroundColor: alpha(color, 0.7),
      gridRow: `${from + 1} / ${to + 1} `,
      minHeight: 0,
      overflow: 'hidden',
    },
  };
  return <Box sx={styles.container}>{title}</Box>;
};
