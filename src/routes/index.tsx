import { useRoutes } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import JoinTheFamilyPage from "../pages/JoinTheFamilyPage";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/details",
      element: <DetailPage />,
    },
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/jointhefamily",
      element : <JoinTheFamilyPage/>
    },
    {
      path: "*",
      element: <div>404</div>,
    },
  ]);

  return routes;
}

