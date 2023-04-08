import { WeekGridCellEventUI } from "./week_grid_cell_event_ui";
// import { useGridCellEvent } from "./grid_cell_event_hook";

export type WeekGridCellEventProps = {
  title: string;
  color: string;
  from: Date;
  to: Date;
};

export const WeekGridCellEvent = ({
  title,
  color,
  from,
  to,
}: WeekGridCellEventProps) => {
  let fromHours = from.getHours() * 2;
  from.getMinutes() >= 30 && fromHours++;
  const fromGrid = fromHours;

  let toHours = to.getHours() * 2;
  to.getMinutes() >= 30 && toHours++;
  const toGrid = toHours;
  console.log(title, to);

  return (
    <WeekGridCellEventUI
      title={title}
      color={color}
      from={fromGrid}
      to={toGrid}
    />
  );
};
