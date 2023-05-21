// React
import React from "react";

// React SVG
import { ReactSVG } from "react-svg";

// Components
import { AppText } from "@/features/app/components";

const Filter: React.FC = () => (
  <div className="d-flex justify-between px-2 mb-5">
    <ReactSVG src="icon-search-deactive-16x16.svg" />

    <div className="d-flex gap-2">
      <AppText color="gray-4" size="small" weight="semibold">
        Recents
      </AppText>
      <ReactSVG src="icon-arrow-drop-down-16x16.svg" />
    </div>
  </div>
);

export default Filter;
