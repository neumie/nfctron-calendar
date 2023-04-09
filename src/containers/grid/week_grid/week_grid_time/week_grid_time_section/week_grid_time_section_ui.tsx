import { Box } from '@mui/material';

const styles = {
  container: {
    border: 0.5,
    borderColor: 'grey.300',
  },
};

export type WeekGridTimeSectionUIProps = {
  hour: number;
};

export const WeekGridTimeSectionUI = ({ hour }: WeekGridTimeSectionUIProps) => (
  <Box sx={styles.container}>{hour}</Box>
);
