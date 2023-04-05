import { DateSelector } from "../../../components/date_selector/date_selector";
import { useCalendarContext } from "./../../calendar/calendar_context";

export const useMonthGrid = () => {
  const { activeDate } = useCalendarContext();

  return {
    activeDate,
  };
};
