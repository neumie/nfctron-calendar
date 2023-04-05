import {
  useCalendarContext,
  GridViews,
} from "../../containers/calendar/calendar_context";

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
