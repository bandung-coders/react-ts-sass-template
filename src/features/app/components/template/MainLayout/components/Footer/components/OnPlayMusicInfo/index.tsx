// React
import React from "react";

// Components
import { AppText } from "@/features/app/components";
import { ReactSVG } from "react-svg";

const OnPlayMusicInfo: React.FC = () => {
  const image =
    "https://i.scdn.co/image/ab67616d0000485160a65de69f03d8183fa316f8";

  return (
    <div className="d-flex align-center gap-4">
      <img src={image} width={55} style={{ borderRadius: "4px" }} />

      <div>
        <AppText size="small" className="mb-1" weight="semibold">
          YES or YES
        </AppText>
        <AppText weight="semibold" size="xsmall" color="gray-3">
          TWICE
        </AppText>
      </div>
      <ReactSVG src="icon-heath-24x24.svg" />
    </div>
  );
};

export default OnPlayMusicInfo;
