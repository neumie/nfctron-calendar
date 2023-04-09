import { useTheme } from '@mui/material/styles';

const getGridStart = (date: Date, from: Date): number => {
  if (date.getDate() > from.getDate()) return 0;
  return from.getHours() * 2 + Math.floor(from.getMinutes() / 30);
};

const getGridEnd = (date: Date, to: Date): number => {
  if (date.getDate() < to.getDate()) return 48;
  return to.getHours() * 2 + Math.floor(to.getMinutes() / 30);
};

export const useWeekGridCellEvent = (date: Date, from: Date, to: Date) => {
  const theme = useTheme();

  const fromGrid = getGridStart(date, from);
  const toGrid = getGridEnd(date, to);

  return {
    fromGrid,
    toGrid,
    theme,
  };
};
