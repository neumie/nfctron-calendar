import { Box } from '@mui/material';
import { dayNames } from '../../../../utils/utils';

export const useMonthGridHeader = () => {
  const dayNameElements = dayNames.map((dayName, index) => (
    <Box sx={{ overflow: 'hidden' }} key={index}>
      {dayName}
    </Box>
  ));

  return {
    dayNameElements,
  };
};
