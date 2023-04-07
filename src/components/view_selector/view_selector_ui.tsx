import { ToggleButton } from "@mui/material";
import { ToggleButtonGroup } from "@mui/material";
import { GridViews } from "../../utils/utils";

export type ViewSelectorUIProps = {
  activeGridView: GridViews;
  onGridViewChange: (
    event: React.MouseEvent<HTMLElement>,
    gridViewOption: GridViews
  ) => void;
};

export const ViewSelectorUI = ({
  activeGridView,
  onGridViewChange,
}: ViewSelectorUIProps) => {
  return (
    <ToggleButtonGroup
      value={activeGridView}
      onChange={onGridViewChange}
      color="primary"
      exclusive
      aria-label="View"
    >
      <ToggleButton value={GridViews.WEEK}>{GridViews.WEEK}</ToggleButton>
      <ToggleButton value={GridViews.MONTH}>{GridViews.MONTH}</ToggleButton>
    </ToggleButtonGroup>
  );
};
