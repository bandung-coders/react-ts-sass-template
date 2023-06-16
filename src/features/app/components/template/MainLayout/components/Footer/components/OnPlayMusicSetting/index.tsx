// React
import React from "react";

// Components
import { AppSvg } from "@/features/app/components";

const OnPlayMusicSetting: React.FC = () => (
  <div className="d-flex align-center">
    <AppSvg iconName="icon-volume-16x16" />
    <div className="volume"></div>
  </div>
);

export default OnPlayMusicSetting;
