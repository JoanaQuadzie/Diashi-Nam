import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login.jsx";
import SignUp from "./pages/signup.jsx";
import React from "react";
import Home from "./pages/homepage/homepage.jsx";
import Availableriders from "./pages/availableriders.jsx";
import Profile from "./pages/profile.jsx";

const router = createBrowserRouter([
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  { path: "/", element: <Home /> },
  { path: "/availableriders", element: <Availableriders />},
  { path: "/profile", element: <Profile />},
]);


export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>

  );
}


