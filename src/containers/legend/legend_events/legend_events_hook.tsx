import { useCalendarContext } from '../../calendar/calendar_context';
import { filterEventsByDate } from '../../../utils/utils';
import { LegendEvent } from './legend_event/legend_event';

export const useLegendEvents = () => {
  const { activeDate, occasions } = useCalendarContext();

  const filteredEvents = filterEventsByDate(occasions, activeDate);
  const eventElements = filteredEvents.map((event, index) => {
    return <LegendEvent key={index} event={event} />;
  });

  return { eventElements };
};
