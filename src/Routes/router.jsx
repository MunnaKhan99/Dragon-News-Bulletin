import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../Layout/AuthLayout";

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
            },
            { path: "/career", element: <>This is from Career</> }]
    },

    {
        path: "/auth",
        element:<AuthLayout/> ,
        children: [
            { path: "/auth/login", element: <Login /> },
            { path: "/auth/register", element: <Register /> }
        ]
    },
    { path: "/*", element: <>Error 404</> },

])
export default router;