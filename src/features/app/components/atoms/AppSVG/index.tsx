// React
import React from "react";

// Interfaces
import { type IAppSVGProps } from "./interfaces";
import { useDynamicSvg } from "@/features/app/hooks";

const AppSVG: React.FC<IAppSVGProps> = ({ iconName }) => {
  const { SvgIcon } = useDynamicSvg(iconName);
  return <>{SvgIcon && <SvgIcon />}</>;
};

export default AppSVG;
