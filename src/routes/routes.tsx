import App from "@/App";
import BookDetails from "@/pages/books/bookDetails";
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
