import { MonthSelectorUI } from "./month_selector_ui";
import { useMonthSelector } from "./month_selector_hook";
import dayjs from "dayjs";

export const MonthSelector = () => {
  const { activeDate, handleMonthChange, handleMonthShift } =
    useMonthSelector();
  const activeDateDayjs = dayjs(activeDate);

  return (
    <MonthSelectorUI
      activeDateDayjs={activeDateDayjs}
      handleDateChange={handleMonthChange}
      handleDateShift={handleMonthShift}
    />
  );
};
