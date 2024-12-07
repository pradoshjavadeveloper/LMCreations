import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/pages/Home/Home";

import AboutUs from "../components/pages/AboutUs/AboutUs";
import Speakers from "../components/pages/Events/Speakers";
// import Login from "../components/pages/Login/Login";
// import Register from "../components/pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/pages/ErrorPage";
import EventDetails from "../components/pages/Events/EventDetails/EventDetails";

// import Payment from "../components/pages/payment/Payment";
import AllEvents from "./../components/pages/Events/AllEvents";
import ContactUs from "../components/pages/ContactUs/ContactUs";
// import Report from "../components/pages/payment/PaymentsReport/Report";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/events-data.json"),
      },

      {
        path: "/events",
        element: <AllEvents />,
        loader: () => fetch("/events-data.json"),
      },
      {
        path: "/event/:id",
        element: <EventDetails />,
        loader: () => fetch("/events-data.json"),
      },
      
      {
        path: "/Speakers",
        element: <Speakers />,
        loader: () => fetch("/events-data.json"),
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
        // loader: () => fetch("/events-data.json"),
      },
    ],
  },
]);

export default router;
