import React from "react";

import { useHeader } from "./header_hook";
import { HeaderUI } from "./header_ui";

export const Header = () => {
  const { handleViewButtonClick } = useHeader();

  return <HeaderUI onViewButtonClick={handleViewButtonClick} />;
};
