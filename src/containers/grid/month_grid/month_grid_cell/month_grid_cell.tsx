import { MonthGridCellUI } from "./month_grid_cell_ui";
import { useMonthGridCell } from "./month_grid_cell_hook";
import { useTheme } from "@mui/material/styles";
import { Event, filterEventsByDate } from "../../../../utils/utils";
import { MonthGridCellEvent } from "./month_grid_cell_event/month_grid_cell_event";
import { getEvents, datesAreSameDay } from "../../../../utils/utils";

export type MonthGridCellProps = {
  date: Date;
};

export const MonthGridCell = ({ date }: MonthGridCellProps) => {
  const theme = useTheme();
  const { setCalendarState, activeDate } = useMonthGridCell();

  const selected: boolean = datesAreSameDay(date, activeDate);
  const today: boolean = datesAreSameDay(date, new Date());
  const day: number = date.getDate();

  const events: Event[] = getEvents();
  const filteredEvents: Event[] = filterEventsByDate(events, date);
  const eventElements = filteredEvents.map(({ id, title, color }) => {
    return <MonthGridCellEvent key={id} title={title} color={color} />;
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
    <MonthGridCellUI
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
