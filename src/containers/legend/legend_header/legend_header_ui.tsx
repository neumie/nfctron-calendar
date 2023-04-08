import { Box, Typography } from "@mui/material";

export type LegendHeaderUIProps = {
  activeDate: Date;
};

export const LegendHeaderUI = ({ activeDate }: LegendHeaderUIProps) => {
  const activeDateString = activeDate.toDateString();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: 2,
        height: "60px",
        borderBottom: 0.5,
        borderColor: "grey.300",
      }}
    >
      <Typography variant="h5">{activeDateString}</Typography>
    </Box>
  );
};
