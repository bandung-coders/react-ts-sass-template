// Interfaces
import { skeleton, type IAppSkeletonProps } from "./cva";

const AppSkeleton = ({
  className,
  width,
  height,
  rounded,
}: IAppSkeletonProps) => {
  const skeletonClassName = skeleton({ className, rounded });

  return (
    <div className={skeletonClassName} style={{ width, height }}>
      <div className="skeleton__list" style={{ height }}></div>
    </div>
  );
};

AppSkeleton.defaultProps = {
  width: "100%",
  height: "20px",
};

export default AppSkeleton;
