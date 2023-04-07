import { GridViews } from "../../utils/utils";
import { MonthSelector } from "../month_selector/month_selector";
import { WeekSelector } from "../week_selector/week_selector";
import { useDateSelector } from "./date_selector_hook";

export const DateSelector = () => {
  const { activeGridView } = useDateSelector();

  switch (activeGridView) {
    case GridViews.WEEK: {
      return <WeekSelector />;
    }
    case GridViews.MONTH: {
      return <MonthSelector />;
    }
    default: {
      throw new Error("Unreachable error");
    }
  }
};
