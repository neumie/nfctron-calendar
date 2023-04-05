import { Dayjs } from "dayjs";
import { useCalendarContext } from "../../containers/calendar/calendar_context";

export const useWeekSelector = () => {
  const { setCalendarState, activeDate } = useCalendarContext();

  const handleWeekChange = (newDateDayjs: Dayjs | null) => {
    newDateDayjs && setCalendarState({ activeDate: newDateDayjs.toDate() });
  };

  return {
    activeDate,
    handleWeekChange,
  };
};
