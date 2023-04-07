import { Box } from "@mui/material";

export type LegendEventUIProps = {
  title: string;
  from: Date;
  duration: string;
  color: string;
};

export const LegendEventUI = ({
  title,
  from,
  duration,
  color,
}: LegendEventUIProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        minHeight: "60px",
        borderLeft: 5,
        borderColor: color,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>From</Box>
        <Box>{duration}</Box>
      </Box>
      {title}
    </Box>
  );
};
