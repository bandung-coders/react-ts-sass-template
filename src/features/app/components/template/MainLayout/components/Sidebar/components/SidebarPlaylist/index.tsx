// React
import React from "react";

// Components
import { AppText } from "@/features/app/components/atoms";

// Interfaces
import { type ISidebarPlaylist } from "./interfaces";

const SidebarPlaylist: React.FC<ISidebarPlaylist> = ({
  title,
  artist,
  image,
}) => (
  <div className="d-flex align-center gap-3">
    <img src={image} style={{ borderRadius: "4px" }} width={47} />
    <div className="d-flex flex-column gap-1">
      <AppText weight="semibold">{title}</AppText>
      <div className="d-flex gap-2">
        <AppText size="small" weight="semibold" color="gray-3">
          Playlist
        </AppText>
        <AppText size="small" weight="semibold" color="gray-3">
          •
        </AppText>
        <AppText size="small" weight="semibold" color="gray-3">
          {artist}
        </AppText>
      </div>
    </div>
  </div>
);

export default SidebarPlaylist;
