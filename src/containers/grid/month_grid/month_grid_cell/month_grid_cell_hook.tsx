import { useCalendarContext } from "../../../calendar/calendar_context";

export const useMonthGridCell = () => {
  const { setCalendarState, activeDate } = useCalendarContext();

  return {
    setCalendarState,
    activeDate,
  };
};
