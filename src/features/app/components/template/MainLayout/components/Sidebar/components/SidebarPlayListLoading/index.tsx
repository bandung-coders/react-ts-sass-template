import { AppSkeleton } from "@/features/app/components/atoms";

const SidebarPlaylistLoading = () => {
  return (
    <div className="d-flex flex-column gap-4">
      {Array.from({ length: 7 }).map((_, index) => (
        <div key={index} className="d-flex gap-3">
          <AppSkeleton width="47px" height="47px" rounded />
          <div className="d-flex flex-column flex-1 justify-between">
            <AppSkeleton height="20px" rounded />
            <AppSkeleton width="170px" height="20px" rounded />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidebarPlaylistLoading;
