import {
  loadEvent,
  removeEvent,
  convertDateToHoursMinutes,
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

  const fromString = convertDateToHoursMinutes(from);
  const toString = convertDateToHoursMinutes(to);

  const handleDelete = () => {
    removeEvent(setCalendarState, id);
  };

  const handleClick = () => {
    loadEvent(setCalendarState, id);
  };

  return (
    <LegendEventUI
      title={title}
      from={fromString}
      to={toString}
      color={color}
      onDelete={handleDelete}
      onClick={handleClick}
    />
  );
};
