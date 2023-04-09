import { Box } from '@mui/material';

export type MonthGridCellEventUIProps = {
  title: string;
  color: string;
};

export const MonthGridCellEventUI = ({ title, color }: MonthGridCellEventUIProps) => {
  const styles = {
    container: {
      backgroundColor: color,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  };

  return <Box sx={styles.container}>{title}</Box>;
};
