import App from "@/App";
import LoginForm from "@/components/forms/LoginFrom";
import SignupForm from "@/components/forms/SignupForm";
import BookDetails from "@/pages/books/BookDetails";
import Checkout from "@/pages/checkout/Checkout";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LoginForm></LoginForm>,
      },
      {
        path: "/signup",
        element: <SignupForm></SignupForm>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "/details/:id",
        element: <BookDetails></BookDetails>,
      },
    ],
  },
]);

export default routes;
