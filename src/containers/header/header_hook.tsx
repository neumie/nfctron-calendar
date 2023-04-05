import { useCalendarContext, GridViews } from "../calendar/calendar_context";

export const useHeader = () => {
  const { setCalendarState } = useCalendarContext();

  const handleViewButtonClick = (GridView: GridViews) => {
    setCalendarState?.({ activeGridView: GridView });
  };

  return {
    handleViewButtonClick,
  };
};
