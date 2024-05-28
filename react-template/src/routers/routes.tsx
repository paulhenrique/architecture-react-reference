import { createBrowserRouter } from "react-router-dom";
// import { Authenticated } from "providers/Authenticated";
// start of imports
import { Settings } from "../pages/Settings";
import Home from "../pages/Home";

export const routePaths = {
  settings: "/configuracao",
  settingsCreate: "/configuracao/criar",
  home: "/",
};

export const aliasesPaths = {
  settings: "settings",
  settingsCreate: "settings",
  home: "home",
};

export const router = createBrowserRouter([
  {
    path: routePaths.home,
    element: <Home />,
  },
  {
    path: routePaths.settingsCreate,
    element: <Settings.Create />,
  },
  {
    path: routePaths.settings,
    element: <Settings.Search />,
  },
]);
