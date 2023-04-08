import dayjs, { Dayjs } from 'dayjs';
import { useCalendarContext } from '../../containers/calendar/calendar_context';
import { ShiftDirection, shiftMonth } from '../../utils/date';

export const useMonthSelector = () => {
  const { setCalendarState, activeDate } = useCalendarContext();

  const activeDateDayjs = dayjs(activeDate);

  const handleMonthChange = (newDateDayjs: Dayjs | null) => {
    const newDate = newDateDayjs?.toDate();
    if (!newDate?.getTime()) return;
    newDate && setCalendarState({ activeDate: newDate });
  };

  const handleMonthShift = (direction: ShiftDirection) => {
    setCalendarState({ activeDate: shiftMonth(activeDate, direction) });
  };

  return {
    activeDateDayjs,
    handleMonthChange,
    handleMonthShift,
  };
};
