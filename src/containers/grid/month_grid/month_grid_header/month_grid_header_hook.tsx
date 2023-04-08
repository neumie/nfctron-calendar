import { Box } from '@mui/material';
import { dayNames } from '../../../../utils/utils';

export const useMonthGridHeader = () => {
  const dayNameElements = dayNames.map((dayName, index) => <Box key={index}>{dayName}</Box>);

  return {
    dayNameElements,
  };
};
