import { WeekGridCellUI } from "./week_grid_cell_ui";
import { useWeekGridCell } from "./week_grid_cell_hook";
import { filterEventsByDate, getEvents, Event } from "../../../../utils/utils";
import { WeekGridCellEvent } from "./week_grid_cell_event/week_grid_cell_event";

export type WeekGridCellProps = {
  date: Date;
};

export const WeekGridCell = ({ date }: WeekGridCellProps) => {
  const { setCalendarState } = useWeekGridCell();

  const handleClick = (event: React.MouseEvent) => {
    setCalendarState({ activeDate: date });
    if (event.detail === 2) {
      //Do something on double click
    }
  };

  const events: Event[] = getEvents();
  const filteredEvents: Event[] = filterEventsByDate(events, date);
  const eventElements = filteredEvents.map(({ id, title, color, from, to }) => {
    return (
      <WeekGridCellEvent
        key={id}
        title={title}
        color={color}
        from={from}
        to={to}
      />
    );
  });

  return <WeekGridCellUI events={eventElements} onClick={handleClick} />;
};
