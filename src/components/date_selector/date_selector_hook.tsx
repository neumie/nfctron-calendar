import { useCalendarContext } from "../../containers/calendar/calendar_context";

export const useDateSelector = () => {
  const { activeGridView } = useCalendarContext();

  return {
    activeGridView,
  };
};
