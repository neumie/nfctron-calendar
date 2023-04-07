import { Box, IconButton } from "@mui/material";
import { Delete, Delete as DeleteIcon } from "@mui/icons-material";

export type LegendEventUIProps = {
  title: string;
  from: Date;
  duration: string;
  color: string;
  onDelete: () => void;
  onClick: () => void;
};

export const LegendEventUI = ({
  title,
  from,
  duration,
  color,
  onDelete,
  onClick,
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
      onClick={onClick}
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
      <IconButton onClick={onDelete} aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};
