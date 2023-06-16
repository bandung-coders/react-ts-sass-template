// React
import React from "react";

// React SVG
import { ReactSVG } from "react-svg";

// Components
import { AppText } from "@/features/app/components";

// Interfaces
import { type IHeaderItemProps } from "./interfaces";

const HeaderItem: React.FC<IHeaderItemProps> = ({ icon, title, active }) => (
  <div className="d-flex align-center gap-5 cursor-pointer">
    <ReactSVG src={icon} />
    <AppText color={active ? "white-1" : "gray-4"} weight="bold">
      {title}
    </AppText>
  </div>
);

export default HeaderItem;
