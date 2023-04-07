import { MonthGridHeaderUI } from "./month_grid_header_ui";
import { dayNames } from "../../../../utils/utils";

export const MonthGridHeader = () => {
  const dayNameElements = dayNames.map((dayName, index) => (
    <p key={index}>{dayName}</p>
  ));
  return <MonthGridHeaderUI dayNames={dayNameElements} />;
};
