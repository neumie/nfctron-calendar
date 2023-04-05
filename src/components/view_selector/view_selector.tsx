import { ViewSelectorUI } from "./view_selector_ui";
import { useViewSelector } from "./view_selector_hook";

export const ViewSelector = () => {
  const { activeGridView, handleGridViewChange } = useViewSelector();

  return (
    <ViewSelectorUI
      activeGridView={activeGridView}
      onGridViewChange={handleGridViewChange}
    />
  );
};
