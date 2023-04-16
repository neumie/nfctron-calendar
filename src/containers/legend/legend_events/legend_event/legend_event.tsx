import { useLegendEvent } from './legend_event_hook';
import { LegendEventUI } from './legend_event_ui';
import { Occasion } from '../../../../utils/utils';

export type LegendEventProps = {
  event: Occasion;
};

export const LegendEvent = ({ event }: LegendEventProps) => {
  const { fromString, toString, handleClick, handleDelete } = useLegendEvent(event);

  return (
    <LegendEventUI
      title={event.title}
      from={fromString}
      to={toString}
      color={event.color}
      onDelete={handleDelete}
      onClick={handleClick}
    />
  );
};
