// RTK
import { useLazyHomePlaylistsQuery } from "../redux/rtk";

export const useHome = () => {
  const [
    fetchHomePlaylists,
    { data: dataHomePlaylists, isLoading: isLoadingHomePlaylists },
  ] = useLazyHomePlaylistsQuery();

  return {
    fetchHomePlaylists,
    dataHomePlaylists,
    isLoadingHomePlaylists,
  };
};
