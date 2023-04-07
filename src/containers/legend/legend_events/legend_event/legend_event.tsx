import { convertMsToString, getDateDifference } from "../../../../utils/utils";
import { LegendEventUI } from "./legend_event_ui";
import { Event } from "../../../../utils/utils";

export type LegendEventProps = {
  event: Event;
};

export const LegendEvent = ({ event }: LegendEventProps) => {
  const { title, color, from, to } = event;
  const duration = getDateDifference(from, to);
  const durationString = convertMsToString(duration);

  return (
    <LegendEventUI
      title={title}
      from={from}
      duration={durationString}
      color={color}
    />
  );
};
