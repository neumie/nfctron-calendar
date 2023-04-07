import { Box } from "@mui/material";

export type MonthGridCellEventUIProps = {
  title: string;
  color: string;
};

export const MonthGridCellEventUI = ({
  title,
  color,
}: MonthGridCellEventUIProps) => {
  return (
    <Box
      sx={{
        backgroundColor: color,
      }}
    >
      {title}
    </Box>
  );
};
