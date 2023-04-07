import { GridCellUI } from "./grid_cell_ui";
import { useGridCell } from "./grid_cell_hook";
import { useTheme } from "@mui/material/styles";
import type { Event } from "../../utils/utils";
import { GridCellEvent } from "./grid_cell_event/grid_cell_event";
import { getEvents, datesAreSameDay } from "../../utils/utils";

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
  const eventElements = events.map(({ id, title, color }) => {
    return <GridCellEvent key={id} title={title} color={color} />;
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
