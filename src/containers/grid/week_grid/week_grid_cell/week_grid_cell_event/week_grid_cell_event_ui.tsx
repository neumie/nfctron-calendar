import { Box } from "@mui/material";

export type WeekGridCellEventUIProps = {
  title: string;
  color: string;
  from: number;
  to: number;
};

export const WeekGridCellEventUI = ({
  title,
  color,
  from,
  to,
}: WeekGridCellEventUIProps) => {
  return (
    <Box
      sx={{
        backgroundColor: color,
        gridRow: `${from + 1} / ${to} `,
      }}
    >
      {title}
    </Box>
  );
};
