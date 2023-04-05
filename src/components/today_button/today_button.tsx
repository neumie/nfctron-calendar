import { TodayButtonUI } from "./today_button_ui";
import { useTodayButton } from "./today_button_hook";

export const TodayButton = () => {
  const { handleDateChange } = useTodayButton();

  return <TodayButtonUI handleDateChange={handleDateChange} />;
};
