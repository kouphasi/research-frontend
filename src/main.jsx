import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Verifier from "./pages/Verifier.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: '/verify',
    element: <Verifier />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
