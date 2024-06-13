import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Beans from "./screens/Beans";
import Bean from "./screens/Bean";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Beans />,
      },
      {
        path: ":beanId",
        element: <Bean />
      }
    ],
  },
]);

export default router;
