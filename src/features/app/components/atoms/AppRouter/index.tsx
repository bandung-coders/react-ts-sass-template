// React
import { Suspense, useEffect } from "react";

// React Router DOM
import { useNavigate } from "react-router-dom";

// Custom hooks
import { useAuth } from "@/features/auth/hooks";

// Plugins
import useRouter from "@/plugins/router";

const AppRouter: React.FC = () => {
  const navigate = useNavigate();
  const { authData } = useAuth();
  const routers = useRouter();

  useEffect(() => {
    if (["/", "/login"].includes(location?.pathname)) {
      if (authData.isLogin) {
        navigate("/");
      } else {
        navigate("/login");
      }
    }
  }, [authData.isLogin, navigate]);

  return <Suspense fallback={<div>Loading ...</div>}>{routers}</Suspense>;
};

export default AppRouter;
