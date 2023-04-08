export const useWeekGridCellEvent = (date: Date, from: Date, to: Date) => {
  let fromHours = from.getHours() * 2;
  from.getMinutes() >= 30 && fromHours++;
  const fromGrid = fromHours;

  let toGrid;
  if (date.getDate() < to.getDate()) {
    toGrid = 48;
  } else {
    let toHours = to.getHours() * 2;
    to.getMinutes() >= 30 && toHours++;
    toGrid = toHours;
  }

  return {
    fromGrid,
    toGrid,
  };
};
