import { Box } from "@mui/material";

export type GridCellEventUIProps = {
  title: string;
  color: string;
};

export const GridCellEventUI = ({ title, color }: GridCellEventUIProps) => {
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
