import { useLegendHeader } from './legend_header_hook';
import { LegendHeaderUI } from './legend_header_ui';

export const LegendHeader = () => {
  const { activeDateString } = useLegendHeader();

  return <LegendHeaderUI activeDateString={activeDateString} />;
};
