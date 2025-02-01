import App from "../App";
import Cart from "../components/Cart";
import Error from "../components/Error";
import Contact from "../components/Contact";
import Checkout from "../components/Checkout";
import Products from "../components/Products";
import { createBrowserRouter } from "react-router-dom";

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Products />,
            },
            {
                path: "/contact-us",
                element: <Contact />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/checkout",
                element: <Checkout />,
            },
        ],
        errorElement: <Error />,
    },
]);

export default AppRouter;
