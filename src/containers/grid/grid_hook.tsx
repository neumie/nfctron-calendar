import { useCalendarContext } from "../calendar/calendar_context";

export const useGrid = () => {
  const { activeGridView } = useCalendarContext();

  return {
    activeGridView,
  };
};
