// React
import React from "react";

// React Router DOM
import { Link } from "react-router-dom";

// Components
import { AppButton, AppText } from "@/features/app/components";

const SignUp: React.FC = () => (
  <div>
    <AppText className="text--center" size="large" weight="2xbold">
      Don&apos;t have an account?
    </AppText>

    <Link to="/signup">
      <AppButton
        className="mt-5"
        variant="blank"
        size="large"
        rounded="large"
        block
      >
        SIGN UP FOR SPOTIFY
      </AppButton>
    </Link>
  </div>
);

export default SignUp;
