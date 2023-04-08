import { Button } from '@mui/material';

export type TodayButtonUIProps = {
  onDateChange: () => void;
};

export const TodayButtonUI = ({ onDateChange }: TodayButtonUIProps) => (
  <Button onClick={() => onDateChange()} variant='contained'>
    TODAY
  </Button>
);
