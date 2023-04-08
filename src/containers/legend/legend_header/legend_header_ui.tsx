import { Box, Typography } from '@mui/material';

export type LegendHeaderUIProps = {
  activeDateString: string;
};

export const LegendHeaderUI = ({ activeDateString }: LegendHeaderUIProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: 2,
        height: '60px',
        borderBottom: 0.5,
        borderColor: 'grey.300',
      }}
    >
      <Typography variant='h5'>{activeDateString}</Typography>
    </Box>
  );
};
