import React from "react";
import { isMobile } from "react-device-detect";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./assets/pages/Home.tsx";
import GlobalMouseMovement from "./components/GlobalMouseMovement.tsx";
import WithLoading from "./components/WithLoading.tsx";
import ErrorPage from "./error-page.tsx";
import "./globals.css";
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
    {!isMobile && <GlobalMouseMovement />}
    <WithLoading>
      <RouterProvider router={router} />
    </WithLoading>
  </React.StrictMode>
);
