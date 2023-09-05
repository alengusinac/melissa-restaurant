import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Search from "./components/Search";
import BookingConfirmation from "./components/BookingConfirmation";
import Contact from "./components/Contact";
import Bookings from "./components/admin/Bookings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/booking/:id",
        element: <BookingConfirmation />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/admin/bookings",
        element: <Bookings />,
      },
    ],
  },
]);
