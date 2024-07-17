import * as Sentry from "@sentry/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import React from "react";
import { isMobile } from "react-device-detect";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./assets/pages/Home.tsx";
import GlobalMouseMovement from "./components/GlobalMouse/GlobalMouseMovement.tsx";
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

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  beforeSend(event) {
    // Check if it is an exception, and if so, show the report dialog
    if (event.exception && event.event_id) {
      Sentry.showReportDialog({ eventId: event.event_id });
    }
    return event;
  },
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  // tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {!isMobile && <GlobalMouseMovement />}
    <SpeedInsights />
    <Analytics />
    <WithLoading>
      <RouterProvider router={router} />
    </WithLoading>
  </React.StrictMode>,
);
