import React from "react";
import { Navigate } from "react-router-dom";

const Home = React.lazy(() => import("@/pages/home"));
const Profile = React.lazy(() => import("@/pages/profile"));
const System = React.lazy(() => import("@/pages/system"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/system",
    element: <System />,
  },
];

export default routes;
