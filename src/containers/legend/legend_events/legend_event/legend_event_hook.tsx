import { useCalendarContext } from "./../../../calendar/calendar_context";

export const useLegendEvent = () => {
  const { setCalendarState } = useCalendarContext();

  return { setCalendarState };
};
