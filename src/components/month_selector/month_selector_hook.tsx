import { Dayjs } from "dayjs";
import { useCalendarContext } from "../../containers/calendar/calendar_context";

export type ShiftDirection = "forward" | "backward";

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

const shiftMonth = (date: Date, direction: ShiftDirection): Date => {
  const monthIncrement = direction === "forward" ? 1 : -1;

  let newMonth = date.getMonth() + monthIncrement;
  let newYear = date.getFullYear();
  if (newMonth < 0) {
    newMonth = 11;
    newYear--;
  } else if (newMonth > 11) {
    newMonth = 0;
    newYear++;
  }

  return new Date(newYear, newMonth, date.getDate());
};
