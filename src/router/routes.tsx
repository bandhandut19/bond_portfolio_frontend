import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import RootLayout from "../components/Layout/RootLayout";
import Home from "../components/Home/Home";
import LoginPage from "../components/Dashboard/LoginPage";
import DashBoard from "../components/Dashboard/DashBoard";
import PrivateRoute from "../components/ProtectedRoutes/PrivateRoute";
import SkillMod from "../components/Dashboard/SkillMod";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dashboard",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/adminpanel",
        element: (
          <PrivateRoute>
            <DashBoard></DashBoard>,
          </PrivateRoute>
        ),
      },
      {
        path: "/adminpanel/skill",
        element: (
          <PrivateRoute>
            <SkillMod></SkillMod>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
