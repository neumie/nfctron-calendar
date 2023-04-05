import { useCalendarContext } from "./../../calendar/calendar_context";

export const useLegendHeader = () => {
  const { activeDate } = useCalendarContext();

  return {
    activeDate,
  };
};
