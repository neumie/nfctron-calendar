import { useCalendarContext } from "../../calendar/calendar_context";
import { WeekGridCell } from "./week_grid_cell/week_grid_cell";

export const useWeekGrid = () => {
  const { activeDate } = useCalendarContext();

  const cells = generateWeekArray(activeDate);
  const gridCells = cells.map((cell, index) => (
    <WeekGridCell key={index} date={cell} />
  ));

  return { gridCells };
};

const generateWeekArray = (date: Date) => {
  const days: Date[] = [];
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const firstDay = new Date(year, month, day);
  const lastDay = new Date(year, month, day);

  //Make sure that the first day is a monday
  while (firstDay.getDay() !== 1) {
    firstDay.setDate(firstDay.getDate() - 1);
  }

  //Make sure that the last day is a sunday
  while (lastDay.getDay() !== 0) {
    lastDay.setDate(lastDay.getDate() + 1);
  }

  const currentDay = new Date(firstDay.getTime());
  while (currentDay <= lastDay) {
    days.push(new Date(currentDay.getTime()));
    currentDay.setDate(currentDay.getDate() + 1);
  }

  return days;
};
