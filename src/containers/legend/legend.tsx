import { EventEditor } from "../../components/event_editor/event_editor";
import { LegendEvents } from "./legend_events/legend_events";
import { LegendHeader } from "./legend_header/legend_header";

export const Legend = () => {
  return (
    <>
      <LegendHeader />
      <LegendEvents />
      <EventEditor />
    </>
  );
};
