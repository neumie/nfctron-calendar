import { truncate } from '../../../../../utils/utils';

export const useMonthGridCellEvent = (title: string) => {
  const shortenedTitle = truncate(title, 10);

  return {
    shortenedTitle,
  };
};
