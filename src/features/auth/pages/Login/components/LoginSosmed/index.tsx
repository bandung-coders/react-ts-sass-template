// React
import React from "react";

// Components
import { AppButton, AppText } from "@/features/app/components/base";

const LoginSosmed: React.FC = () => (
  <>
    <div className="flex flex-col gap-3">
      <AppButton color="facebook" size="large" rounded="large">
        CONTINUE WITH FACEBOOK
      </AppButton>

      <AppButton color="black-1" size="large" rounded="large">
        CONTINUE WITH APPLE
      </AppButton>

      <AppButton size="large" rounded="large">
        CONTINUE WITH GOOGLE
      </AppButton>

      <AppButton size="large" rounded="large">
        CONTINUE WITH PHONE NUMBER
      </AppButton>
    </div>

    <div>
      <AppText
        className="relative left-[43%] bg-white-1 w-max px-5 text-[0.855rem] z-[1]"
        weight="semibold"
      >
        OR
      </AppText>
      <hr className="relative bottom-4 z-0 text-gray-1" />
    </div>
  </>
);

export default LoginSosmed;
