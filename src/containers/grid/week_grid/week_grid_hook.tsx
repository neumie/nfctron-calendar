import { useCalendarContext } from "../../calendar/calendar_context";

export const useWeekGrid = () => {
  const { setCalendarState, activeDate } = useCalendarContext();

  return { activeDate };
};
