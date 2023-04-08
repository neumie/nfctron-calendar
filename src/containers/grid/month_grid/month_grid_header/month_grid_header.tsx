import { useMonthGridHeader } from './month_grid_header_hook';
import { MonthGridHeaderUI } from './month_grid_header_ui';

export const MonthGridHeader = () => {
  const { dayNameElements } = useMonthGridHeader();

  return <MonthGridHeaderUI dayNames={dayNameElements} />;
};
