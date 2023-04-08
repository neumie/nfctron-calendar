import { useCalendarContext } from "./calendar_context";

export const useCalendar = () => {
  const { setCalendarState, events } = useCalendarContext();

  return {
    setCalendarState,
    events,
  };
};
