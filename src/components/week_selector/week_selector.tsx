import { WeekSelectorUI } from "./week_selector_ui";
import { useWeekSelector } from "./week_selector_hook";
import dayjs from "dayjs";

export const WeekSelector = () => {
  const { activeDate, handleWeekChange } = useWeekSelector();
  const activeDateDayjs = dayjs(activeDate);

  return (
    <WeekSelectorUI
      activeDateDayjs={activeDateDayjs}
      handleWeekChange={handleWeekChange}
    />
  );
};
