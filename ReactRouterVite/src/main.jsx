import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { creatBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from "./Routes/home.jsx";
import Contact from "./Routes/Contact.jsx";
import ErrorPage from "./Routes/ErrorPage.jsx";
import ContactDetails from "./Routes/ContactDetails.jsx";

const router = creatBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "contact/:id",
        element: <ContactDetails />,
      },
      {
        path:'oldcontact',
        element: <Navigate to="/contact"/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
