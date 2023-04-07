import { LegendEventsUI } from "./legend_events_ui";
import { useLegendEvents } from "./legend_events_hook";
import { getEvents } from "../../../utils/utils";
import { LegendEvent } from "./legend_event/legend_event";

export const LegendEvents = () => {
  const { activeDate } = useLegendEvents();

  const events = getEvents(activeDate);
  const eventElements = events.map((event, index) => {
    return <LegendEvent key={index} event={event} />;
  });

  return <LegendEventsUI events={eventElements} />;
};
