import { useLegendEvents } from './legend_events_hook';
import { LegendEventsUI } from './legend_events_ui';

export const LegendEvents = () => {
  const { eventElements } = useLegendEvents();

  return <LegendEventsUI events={eventElements} />;
};
