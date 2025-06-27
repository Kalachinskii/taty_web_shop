import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { ROUTES } from "@/shared/router/constants";
import { Home } from "@/pages/Home";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
    {
        path: ROUTES.SIGNIN,
        element: <div>Sign in</div>,
    },
    {
        path: ROUTES.SIGNUP,
        element: <div>Sign up</div>,
    },
    {
        path: "*",
        element: <div style={{ color: "red" }}>Страница не найдена - 404</div>,
    },
]);

export const AppRouter = () => <RouterProvider router={router} />;
