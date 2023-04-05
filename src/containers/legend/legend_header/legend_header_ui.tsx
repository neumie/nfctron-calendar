export type LegendHeaderUIProps = {
  activeDate: Date;
};

export const LegendHeaderUI = ({ activeDate }: LegendHeaderUIProps) => {
  const activeDateString = activeDate.toDateString();

  return <p>{activeDateString}</p>;
};
