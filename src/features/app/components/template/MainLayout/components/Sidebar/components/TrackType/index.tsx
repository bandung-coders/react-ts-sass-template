// React
import React from "react";

// Components
import { AppButton, AppText } from "@/features/app/components/atoms";

const TrackType: React.FC = () => (
  <div className="d-flex gap-2 px-1">
    <AppButton variant="gray-5" rounded="large" width="75px">
      <AppText className="text--spacing-0" size="small" weight="semibold">
        Playlists
      </AppText>
    </AppButton>

    <AppButton variant="gray-5" rounded="large" width="65px">
      <AppText className="text--spacing-0" size="small" weight="semibold">
        Artists
      </AppText>
    </AppButton>

    <AppButton variant="gray-5" rounded="large" width="72px">
      <AppText className="text--spacing-0" size="small" weight="semibold">
        Albums
      </AppText>
    </AppButton>
  </div>
);

export default TrackType;
