import { Dayjs } from "dayjs";
import { useCalendarContext } from "../../containers/calendar/calendar_context";
import { ShiftDirection, shiftMonth } from "../../utils/utils";

export const useMonthSelector = () => {
  const { setCalendarState, activeDate } = useCalendarContext();

  const handleMonthChange = (newDateDayjs: Dayjs | null) => {
    const newDate = newDateDayjs?.toDate();
    if (!newDate?.getTime()) return;
    newDate && setCalendarState({ activeDate: newDate });
  };

  const handleMonthShift = (direction: ShiftDirection) => {
    setCalendarState({ activeDate: shiftMonth(activeDate, direction) });
  };

  return {
    activeDate,
    handleMonthChange,
    handleMonthShift,
  };
};
