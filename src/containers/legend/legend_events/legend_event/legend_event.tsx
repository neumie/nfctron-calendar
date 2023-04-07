import {
  convertMsToString,
  getDateDifference,
  loadEvent,
  removeEvent,
} from "../../../../utils/utils";
import { LegendEventUI } from "./legend_event_ui";
import { Event } from "../../../../utils/utils";
import { useLegendEvent } from "./legend_event_hook";

export type LegendEventProps = {
  event: Event;
};

export const LegendEvent = ({ event }: LegendEventProps) => {
  const { setCalendarState } = useLegendEvent();
  const { id, title, color, from, to } = event;
  const duration = getDateDifference(from, to);
  const durationString = convertMsToString(duration);

  const handleDelete = () => {
    removeEvent(setCalendarState, id);
  };

  const handleClick = () => {
    loadEvent(setCalendarState, id);
  };

  return (
    <LegendEventUI
      title={title}
      from={from}
      duration={durationString}
      color={color}
      onDelete={handleDelete}
      onClick={handleClick}
    />
  );
};
