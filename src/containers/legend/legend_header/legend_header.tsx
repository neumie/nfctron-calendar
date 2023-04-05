import { LegendHeaderUI } from "./legend_header_ui";
import { useLegendHeader } from "./legend_header_hook";

export const LegendHeader = () => {
  const { activeDate } = useLegendHeader();

  return <LegendHeaderUI activeDate={activeDate} />;
};
