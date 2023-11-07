import App from "@/App";
import Home from "@/pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            }
        ]
    }
])

export default routes;