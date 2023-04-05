import { Theme, alpha } from "@mui/material";
import { Box } from "@mui/material";

export type GridCellUIProps = {
  today: boolean;
  selected: boolean;
  day: number;
  month?: string;
  theme: Theme;
  onClick: () => void;
};

export const GridCellUI = ({
  today,
  selected,
  day,
  month,
  theme,
  onClick,
}: GridCellUIProps) => {
  return (
    <Box
      onClick={() => onClick()}
      sx={[
        {
          padding: "0.25em",
          border: 0.5,
          borderColor: "grey.300",
        },
        today && {
          borderTop: 4,
          borderTopColor: "primary.main",
        },
        selected && {
          backgroundColor: alpha(theme.palette.primary.main, 0.2),
        },
      ]}
    >
      {month} {day}
    </Box>
  );
};
