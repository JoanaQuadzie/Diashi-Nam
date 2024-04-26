import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login.jsx";
import SignUp from "./pages/signup.jsx";
import React from "react";
import Home from "./pages/homepage/homepage.jsx";
import Availableriders from "./pages/availableriders.jsx";
import Profile from "./pages/profile.jsx";
import Riderdashboard from "./pages/riderdashboard.jsx";
import Contact from "./pages/contact.jsx";
import About from "./pages/about.jsx";
import Services from "./pages/services.jsx";
import Payment from "./pages/payment.jsx";
import ReceiptForm from "./pages/formlist.jsx";
import Confirmation from "./pages/confirmation.jsx";
import Categories from "./pages/categories";


const router = createBrowserRouter([
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  { path: "/", element: <Home /> },
  { path: "/availableriders", element: <Availableriders />},
  { path: "/profile", element: <Profile />},
  { path: "/riderdashboard", element: <Riderdashboard /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/payment", element: <Payment /> },
  { path: "/receiptForm", element: <ReceiptForm /> },
  { path: "/confirmation", element: <Confirmation /> },
  { path: "/categories", element: <Categories /> }
]);


export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>

  );
}


