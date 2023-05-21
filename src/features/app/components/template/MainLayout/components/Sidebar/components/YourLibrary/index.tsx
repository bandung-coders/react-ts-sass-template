// React
import React from "react";

// React SVG
import { ReactSVG } from "react-svg";

// Components
import { AppText } from "@/features/app/components/atoms";

const YourLibrary: React.FC = () => (
  <div className="d-flex justify-between px-3">
    <div className="d-flex align-center gap-1">
      <ReactSVG src="icon-playlist-24x24.svg" />
      <AppText className="px-2" color="gray-3" weight="bold">
        Your Library
      </AppText>
    </div>

    <div className="d-flex align-center gap-4">
      <ReactSVG src="icon-add-16x16.svg" />
      <ReactSVG src="icon-forward-navigation-16x16.svg" />
    </div>
  </div>
);

export default YourLibrary;
