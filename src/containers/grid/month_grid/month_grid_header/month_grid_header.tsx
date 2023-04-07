import { MonthGridHeaderUI } from "./month_grid_header_ui";

export const MonthGridHeader = () => {
  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const dayNameElements = dayNames.map((dayName, index) => (
    <p key={index}>{dayName}</p>
  ));
  return <MonthGridHeaderUI dayNames={dayNameElements} />;
};
