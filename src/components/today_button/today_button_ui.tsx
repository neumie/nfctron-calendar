import { Button } from "@mui/material";

export type TodayButtonUIProps = {
  handleDateChange: () => void;
};

export const TodayButtonUI = ({ handleDateChange }: TodayButtonUIProps) => {
  return (
    <Button onClick={() => handleDateChange()} variant="contained">
      TODAY
    </Button>
  );
};
