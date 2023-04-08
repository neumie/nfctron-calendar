import { useCalendarContext } from './../../calendar/calendar_context';

export const useLegendHeader = () => {
  const { activeDate } = useCalendarContext();

  const activeDateString = activeDate.toDateString();

  return {
    activeDateString,
  };
};
