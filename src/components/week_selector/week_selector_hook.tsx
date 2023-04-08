import dayjs, { Dayjs } from "dayjs";
import { useCalendarContext } from "../../containers/calendar/calendar_context";

export const useWeekSelector = () => {
  const { setCalendarState, activeDate } = useCalendarContext();

  const activeDateDayjs = dayjs(activeDate);

  const handleWeekChange = (newDateDayjs: Dayjs | null) => {
    const newDate = newDateDayjs?.toDate();
    if (!newDate?.getTime()) return;
    newDate && setCalendarState({ activeDate: newDate });
  };

  return {
    activeDateDayjs,
    handleWeekChange,
  };
};
