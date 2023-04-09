import { Box, Typography } from '@mui/material';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: 2,
    height: '60px',
    borderBottom: 0.5,
    borderColor: 'grey.300',
  },
};

export type LegendHeaderUIProps = {
  activeDateString: string;
};

export const LegendHeaderUI = ({ activeDateString }: LegendHeaderUIProps) => {
  return (
    <Box sx={styles.container}>
      <Typography variant='h5'>{activeDateString}</Typography>
    </Box>
  );
};
