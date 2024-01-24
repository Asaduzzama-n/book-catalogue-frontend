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
import AccountSetting from "@/pages/dashboard/userDashboard/AccountSetting";
import MyProfile from "@/pages/dashboard/userDashboard/MyProfile";
import MyBooks from "@/pages/dashboard/userDashboard/MyBook/MyBooks";
import PaymentSuccess from "@/pages/payment/PaymentSuccess";
import PaymentFail from "@/pages/payment/PaymentFail";
import MyWishList from "@/pages/dashboard/userDashboard/MyWishList";
import ScrollToTop from "@/components/ScrollToTop";

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
        element: (
          <>
            <ScrollToTop />
            <Shop></Shop>
          </>
        ),
      },
      {
        path: "/account",
        element: (
          <PrivateRoute>
            <>
              <ScrollToTop />
              <MyAccount></MyAccount>
            </>
          </PrivateRoute>
        ),
      },

      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <>
              <ScrollToTop />
              <MyProfile></MyProfile>
            </>
          </PrivateRoute>
        ),
      },
      {
        path: "/purchase-history",
        element: (
          <PrivateRoute>
            <>
              <ScrollToTop />
              <MyOrder></MyOrder>
            </>
          </PrivateRoute>
        ),
      },
      {
        path: "/library/books",
        element: (
          <PrivateRoute>
            <>
              <ScrollToTop />
              <MyBooks></MyBooks>
            </>
          </PrivateRoute>
        ),
      },
      {
        path: "/account/settings",
        element: (
          <PrivateRoute>
            <>
              <ScrollToTop />
              <AccountSetting></AccountSetting>
            </>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-wishlist",
        element: (
          <PrivateRoute>
            <>
              <ScrollToTop />
              <MyWishList></MyWishList>
            </>
          </PrivateRoute>
        ),
      },
      {
        path: "/shop" || "/shop/category/",
        element: (
          <>
            <ScrollToTop />
            <Shop></Shop>
          </>
        ),
      },

      {
        path: "/authors",
        element: (
          <>
            <ScrollToTop />
            <Authors></Authors>
          </>
        ),
      },
      {
        path: "/authors/:id",
        element: (
          <>
            <ScrollToTop />
            <AuthorDetails></AuthorDetails>
          </>
        ),
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <>
              <ScrollToTop />
              <Checkout></Checkout>
            </>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <>
            <ScrollToTop />
            <BookDetails></BookDetails>
          </>
        ),
      },
      {
        path: "/payment/success/:invoiceId",
        element: (
          <PrivateRoute>
            <PaymentSuccess></PaymentSuccess>
          </PrivateRoute>
        ),
      },
      {
        path: "/payment/fail/",
        element: (
          <PrivateRoute>
            <PaymentFail></PaymentFail>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default routes;
