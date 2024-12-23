import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Here we import out pages
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
// import SignupPage from "./pages/SignupPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import TourPage from "./pages/TourPage.jsx";
import AllToursPage from "./pages/AllToursPage.jsx";
import BandPage from "./pages/BandPage.jsx";
import AllBandsPage from "./pages/AllBandsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import PageNotFound from "./components/PageNotFound.jsx";

import NavBar from "./components/NavBar.jsx";
import { AuthProvider } from "./components/AuthProvider.jsx";
import NotAuthorised from "./components/Error.jsx";


// Here we create our router and tell it whats pages to render at what path
const router = createBrowserRouter([
  // These are the three routes!
  {
    path: "/",
// Putting our NavBar as the main component will causes the children to render in the <Outlet /> 
  element: <NavBar />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/login", element: <LoginPage /> },
        // { path: "/signup", element: <SignupPage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/bands", element: <AllBandsPage /> },
        { path: "/bands/:id", element: <BandPage /> },
        { path: "/tours", element: <AllToursPage /> },
        { path: "/tours/:id", element: <TourPage /> },
        { path: "/contact", element: <ContactPage /> },
        { path: "/notauth", element: <NotAuthorised /> },
        { path: "/*", element: <PageNotFound /> },


      ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    {/* Here we wrap our app in the router provider so the pages render */}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);