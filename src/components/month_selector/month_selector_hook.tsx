import { Dayjs } from "dayjs";
import { useCalendarContext } from "../../containers/calendar/calendar_context";
import { ShiftDirection, shiftMonth } from "../../utils/utils";

export const useMonthSelector = () => {
  const { setCalendarState, activeDate } = useCalendarContext();

  const handleMonthChange = (newDateDayjs: Dayjs | null) => {
    newDateDayjs && setCalendarState({ activeDate: newDateDayjs.toDate() });
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
