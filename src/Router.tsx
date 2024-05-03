import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./common/Home";

const Router: React.FC<{}> = (props) => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Home />,
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default Router;
