import { GridCellUI } from "./grid_cell_ui";
import { useGridCell } from "./grid_cell_hook";
import { useTheme } from "@mui/material/styles";
import type { Event } from "./../../containers/calendar/calendar_context";
import { GridCellEvent } from "./grid_cell_event/grid_cell_event";

export type GridCellProps = {
  date: Date;
};

export const GridCell = ({ date }: GridCellProps) => {
  const theme = useTheme();
  const { setCalendarState, activeDate } = useGridCell();

  const selected: boolean = datesAreSameDay(date, activeDate);
  const today: boolean = datesAreSameDay(date, new Date());
  const day: number = date.getDate();

  const events: Event[] = getEvents(date);
  const eventElements = events.map(({ title, color }) => {
    return <GridCellEvent title={title} color={color} />;
  });

  //Display month if it's the first day of the month
  let month: string = "";
  if (day === 1) {
    month = date.toLocaleString("default", { month: "short" });
  }

  const handleClick = (event: React.MouseEvent) => {
    setCalendarState({ activeDate: date });
    if (event.detail === 2) {
      //Do something on double click
    }
  };

  return (
    <GridCellUI
      today={today}
      selected={selected}
      day={day}
      month={month}
      onClick={handleClick}
      theme={theme}
      events={eventElements}
    />
  );
};

const datesAreSameDay = (firstDate: Date, secondDate: Date): boolean => {
  return (
    firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getDate() === secondDate.getDate()
  );
};

const getEvents = (date: Date) => {
  const eventsPayload = localStorage.getItem("events");
  if (!eventsPayload) return [];
  const events: Event[] = JSON.parse(eventsPayload);
  const found = events.filter((event) => {
    const from = new Date(event.from);
    const to = new Date(event.to);
    return isDateInRange(date, from, to);
  });
  return found;
};

const isDateInRange = (date: Date, from: Date, to: Date): boolean => {
  from.setHours(0) && from.setMinutes(0) && from.setSeconds(0, 0);
  to.setHours(0) && to.setMinutes(0) && from.setSeconds(0, 0);
  return from <= date && date <= to;
};
