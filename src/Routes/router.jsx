import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/category/:id", element: <CategoryNews />,
                loader: () => fetch("/news.json"),
                hydrateFallbackElement: <Loading></Loading>
            },
            { path: "/career", element: <>This is from Career</> }]
    },

    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            { path: "/auth/login", element: <Login /> },
            { path: "/auth/register", element: <Register /> }
        ]
    },
    {
        path: "/news-details/:id", element:
            <PrivateRoute>
                <NewsDetails />
            </PrivateRoute>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>

    },
    { path: "/*", element: <>Error 404</> },

])
export default router;