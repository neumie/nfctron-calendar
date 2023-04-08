import { useCalendarContext } from "../../../calendar/calendar_context";

export const useWeekGridCell = () => {
  const { setCalendarState, activeDate } = useCalendarContext();

  return {
    setCalendarState,
    activeDate,
  };
};
