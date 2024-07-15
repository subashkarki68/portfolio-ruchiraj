import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../app/globals.css";
import Home from "./components/Home.tsx";
import ErrorPage from "./error-page.tsx";
import HomeLayout from "./layouts/HomeLayout.tsx";

const homeChildren = [{ index: true, element: <Home /> }];

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: homeChildren,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
