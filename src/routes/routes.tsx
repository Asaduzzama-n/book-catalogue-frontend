import App from "@/App";
import LoginForm from "@/components/forms/LoginFrom";
import SignupForm from "@/components/forms/SignupForm";
import NotFound from "@/pages/404";
import AuthorDetails from "@/pages/author/AuthorDetails";
import Authors from "@/pages/author/Authors";
import BookDetails from "@/pages/books/BookDetails";
import Checkout from "@/pages/checkout/Checkout";
import Home from "@/pages/home/Home";
import Shop from "@/pages/shop/Shop";
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
        path: "/best-sellers",
        element: <Shop></Shop>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/authors",
        element: <Authors></Authors>,
      },
      {
        path: "/authors/:id",
        element: <AuthorDetails></AuthorDetails>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "/details/:id",
        element: <BookDetails></BookDetails>,
      },
      {
        path: "/*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default routes;
