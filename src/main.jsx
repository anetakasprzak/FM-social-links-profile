import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage/ErrorPage.jsx";
import GithubPage from "./GithubPage/GithubPage.jsx";
import FMPage from "./FMPage/FMPage.jsx";
import LinkedInPage from "./LinkedInPage/LinkedInPage.jsx";
import TwitterPage from "./TwitterPage/TwitterPage.jsx";
import InstagramPage from "./InstagramPage/InstagramPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "github",
    element: <GithubPage />,
  },
  {
    path: "frontend-mentor",
    element: <FMPage />,
  },
  {
    path: "linkedin",
    element: <LinkedInPage />,
  },
  {
    path: "twitter",
    element: <TwitterPage />,
  },
  {
    path: "instagram",
    element: <InstagramPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
