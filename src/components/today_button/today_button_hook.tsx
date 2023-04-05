import { useCalendarContext } from "../../containers/calendar/calendar_context";

export const useTodayButton = () => {
  const { setCalendarState } = useCalendarContext();

  const handleDateChange = () => {
    setCalendarState({ activeDate: new Date() });
  };

  return {
    handleDateChange,
  };
};
