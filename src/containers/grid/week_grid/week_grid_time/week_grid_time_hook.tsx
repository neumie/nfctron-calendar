import { useCalendarContext } from "../../../calendar/calendar_context";
import { WeekGridTimeSection } from "./week_grid_time_section/week_grid_time_section";

export const useWeekGridTime = () => {
  const {} = useCalendarContext();

  const sections = [...Array(24).keys()].map((hour, index) => (
    <WeekGridTimeSection key={index} hour={hour} />
  ));

  return { sections };
};
