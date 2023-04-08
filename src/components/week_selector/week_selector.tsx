import { useWeekSelector } from './week_selector_hook';
import { WeekSelectorUI } from './week_selector_ui';

export const WeekSelector = () => {
  const { activeDateDayjs, handleWeekChange } = useWeekSelector();

  return <WeekSelectorUI activeDateDayjs={activeDateDayjs} onWeekChange={handleWeekChange} />;
};
