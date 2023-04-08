import { Box } from '@mui/material';

export type WeekGridTimeSectionUIProps = {
  hour: number;
};

export const WeekGridTimeSectionUI = ({ hour }: WeekGridTimeSectionUIProps) => (
  <Box
    sx={{
      border: 0.5,
      borderColor: 'grey.300',
    }}
  >
    {hour}
  </Box>
);
