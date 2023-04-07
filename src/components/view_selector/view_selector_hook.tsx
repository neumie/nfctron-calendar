import { useCalendarContext } from "../../containers/calendar/calendar_context";
import type { GridViews } from "../../utils/utils";

export const useViewSelector = () => {
  const { setCalendarState, activeGridView } = useCalendarContext();

  const handleGridViewChange = (
    event: React.MouseEvent<HTMLElement>,
    newGridView: GridViews
  ) => {
    newGridView && setCalendarState({ activeGridView: newGridView });
  };

  return {
    activeGridView,
    handleGridViewChange,
  };
};
