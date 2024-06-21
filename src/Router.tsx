import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Beans from "./screens/Beans";
import Bean from "./screens/Bean";
import PostData from "./Hooks/PostData";

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
        element: <Bean />,
        children: [
          {
            path: "comment",
            element: <PostData />
          }
        ]
      }
    ],
  },
]);

export default router;
