import { useLazyHomePlaylistsQuery } from "../redux/rtk";

interface HomeHookData {
  fetchHomePlaylists: (payload: any) => void;
  dataHomePlaylists: any | undefined;
  isLoadingHomePlaylists: boolean;
}

export const useHome = (): HomeHookData => {
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
