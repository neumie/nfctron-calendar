export const useWeekGridCellEvent = (from: Date, to: Date) => {
  let fromHours = from.getHours() * 2;
  from.getMinutes() >= 30 && fromHours++;
  const fromGrid = fromHours;

  let toHours = to.getHours() * 2;
  to.getMinutes() >= 30 && toHours++;
  const toGrid = toHours;

  return {
    fromGrid,
    toGrid,
  };
};
