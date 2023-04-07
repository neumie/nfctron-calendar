import { LegendEventsUI } from "./legend_events_ui";
import { useLegendEvents } from "./legend_events_hook";
import { filterEventsByDate, getEvents } from "../../../utils/utils";
import { LegendEvent } from "./legend_event/legend_event";

export const LegendEvents = () => {
  const { activeDate } = useLegendEvents();

  const events = getEvents();
  const filteredEvents = filterEventsByDate(events, activeDate);
  const eventElements = filteredEvents.map((event, index) => {
    return <LegendEvent key={index} event={event} />;
  });

  return <LegendEventsUI events={eventElements} />;
};
