import { useTodayButton } from './today_button_hook';
import { TodayButtonUI } from './today_button_ui';

export const TodayButton = () => {
  const { handleDateChange } = useTodayButton();

  return <TodayButtonUI onDateChange={handleDateChange} />;
};
