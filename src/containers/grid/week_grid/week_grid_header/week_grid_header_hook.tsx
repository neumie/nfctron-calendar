import { Box } from '@mui/material';
import { dayNames } from '../../../../utils/utils';
import { useCalendarContext } from '../../../calendar/calendar_context';

export const useWeekGridHeader = () => {
  const {} = useCalendarContext();

  const dayNameElements = dayNames.map((dayName, index) => (
    <Box
      sx={{
        border: 0.5,
        borderColor: 'grey.300',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
      }}
      key={index}
    >
      {dayName}
    </Box>
  ));
  //Add the corner piece
  dayNameElements.unshift(<Box key={'corner'}></Box>);

  return {
    dayNameElements,
  };
};
