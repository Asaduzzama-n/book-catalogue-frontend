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

import PrivateRoute from "./PrivateRoute";
import MyAccount from "@/pages/dashboard/userDashboard/MyAccount";
import MyOrder from "@/pages/dashboard/userDashboard/MyOrder/MyOrder";
import MyBooks from "@/pages/dashboard/userDashboard/MyBooks";
import AccountSetting from "@/pages/dashboard/userDashboard/AccountSetting";
import MyProfile from "@/pages/dashboard/userDashboard/MyProfile";

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
        path: "/account",
        element: (
          <PrivateRoute>
            <MyAccount></MyAccount>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/purchase-history",
        element: (
          <PrivateRoute>
            <MyOrder></MyOrder>
          </PrivateRoute>
        ),
      },
      {
        path: "/library/books",
        element: (
          <PrivateRoute>
            <MyBooks></MyBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/account/settings",
        element: (
          <PrivateRoute>
            <AccountSetting></AccountSetting>
          </PrivateRoute>
        ),
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
