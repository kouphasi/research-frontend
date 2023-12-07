// import App from "../App.jsx";
import Home from "../Home.jsx";
import Login from "../pages/Login.jsx";
import Verifier from "../pages/Verifier.jsx";
import Preview from "../pages/Preview.jsx";
import RequestGenerator from "../pages/RequestGenerator.jsx";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      // {

      // },
      {
        path: "/verify",
        element: <Verifier />,
      },
      {
        path: "/request_generator",
        element: <RequestGenerator />,
      },
      {
        path: "/preview",
        element: <Preview />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
