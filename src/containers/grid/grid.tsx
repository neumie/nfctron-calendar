import { GridViews } from "../../utils/utils";
import { useGrid } from "./grid_hook";
import { MonthGrid } from "./month_grid/month_grid";
import { WeekGrid } from "./week_grid/week_grid";

export const Grid = () => {
  const { activeGridView } = useGrid();

  switch (activeGridView) {
    case GridViews.WEEK: {
      return <WeekGrid />;
    }
    case GridViews.MONTH: {
      return <MonthGrid />;
    }
    default: {
      throw new Error("Unreachable error");
    }
  }
};
