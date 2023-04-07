import { useCalendarContext } from "./../../calendar/calendar_context";

export const useLegendEvents = () => {
  const { activeDate } = useCalendarContext();

  return { activeDate };
};
