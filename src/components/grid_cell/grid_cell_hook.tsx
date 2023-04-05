import { useCalendarContext } from "./../../containers/calendar/calendar_context";

export const useGridCell = () => {
  const { setCalendarState, activeDate } = useCalendarContext();

  return {
    setCalendarState,
    activeDate,
  };
};
