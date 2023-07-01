// RTK
import { useLazyHomePlaylistsQuery } from "../redux/rtk";

export const useHome = () => {
  const [
    fetchHomePlaylists,
    {
      data: dataHomePlaylists,
      isLoading: isLoadingHomePlaylists,
      isFetching: isFetchingHomePlaylists,
    },
  ] = useLazyHomePlaylistsQuery();

  return {
    // Lazy
    fetchHomePlaylists,
    dataHomePlaylists,
    isLoadingHomePlaylists,
    isFetchingHomePlaylists,
  };
};
