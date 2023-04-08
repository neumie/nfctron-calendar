import { useMonthSelector } from './month_selector_hook';
import { MonthSelectorUI } from './month_selector_ui';

export const MonthSelector = () => {
  const { activeDateDayjs, handleMonthChange, handleMonthShift } = useMonthSelector();

  return (
    <MonthSelectorUI
      activeDateDayjs={activeDateDayjs}
      onDateChange={handleMonthChange}
      onDateShift={handleMonthShift}
    />
  );
};
