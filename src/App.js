import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login.jsx";
import SignUp from "./pages/signup.jsx";
import React from "react";
import Home from "./pages/homepage/homepage.jsx";

const router = createBrowserRouter([
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  { path: "/", element: <Home /> },
]);


export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>

  );
}


