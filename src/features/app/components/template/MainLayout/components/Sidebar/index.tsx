// React
import { useEffect } from "react";

// Components
import {
  Filter,
  HeaderItem,
  SidebarPlaylist,
  TrackType,
  YourLibrary,
} from "./components";

// Custom hooks
import { useHome } from "@/features/home/hooks";
import { type ISidebarPlaylist } from "./components/SidebarPlaylist/interfaces";

const Sidebar: React.FC = () => {
  const { fetchHomePlaylists, dataHomePlaylists, isLoadingHomePlaylists } =
    useHome();

  useEffect(() => {
    fetchHomePlaylists(false);
  }, [fetchHomePlaylists]);

  return (
    <aside className="app__sidebar">
      <div className="sidebar__header">
        <HeaderItem icon="icon-home-active-24x-24.svg" title="Home" active />
        <HeaderItem icon="icon-search-deactive-24x24.svg" title="Search" />
      </div>

      <div className="sidebar__content">
        <YourLibrary />
        <TrackType />

        <div className="sidebar__playlists">
          <Filter />

          {isLoadingHomePlaylists && <div>Loading anjir ...</div>}

          <div className="d-flex flex-column gap-4 overflow-y-scroll">
            {dataHomePlaylists?.data.map(
              ({ id, title, artist, image }: ISidebarPlaylist) => (
                <SidebarPlaylist
                  key={id}
                  title={title}
                  artist={artist}
                  image={image}
                />
              )
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
