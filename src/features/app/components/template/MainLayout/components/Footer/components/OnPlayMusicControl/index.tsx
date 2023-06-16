// React
import React from "react";

// React SVG
import { ReactSVG } from "react-svg";

// Components
import { AppButton, AppText } from "@/features/app/components";

const OnPlayMusicControl: React.FC = () => {
  return (
    <div className="d-flex flex-column align-center">
      <div className="d-flex align-center gap-7">
        {/* Shuffle */}
        <AppButton variant="plain">
          <ReactSVG src="icon-shuffle-24x24.svg" />
        </AppButton>

        {/* Prev */}
        <AppButton variant="plain">
          <ReactSVG src="icon-previous-play-16x16.svg" />
        </AppButton>
        {/* Pause */}

        <AppButton variant="plain">
          <ReactSVG src="icon-pause-button-24x24.svg" />
        </AppButton>

        {/* Next */}
        <AppButton variant="plain">
          <ReactSVG src="icon-next-play-16x16.svg" />
        </AppButton>

        {/* Repeat */}
        <AppButton variant="plain">
          <ReactSVG src="icon-repeat-16x16.svg" />
        </AppButton>
      </div>

      <div className="d-flex align-center gap-2">
        <AppText color="gray-3" size="xsmall">
          2:17
        </AppText>

        <div className="playtime"></div>

        <AppText color="gray-3" size="xsmall">
          4:39
        </AppText>
      </div>
    </div>
  );
};

export default OnPlayMusicControl;
