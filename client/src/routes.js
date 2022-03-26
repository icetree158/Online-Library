import Admin from "./page/Admin";
import {ADMIN_ROUTE, BOOK_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";

import Shop from "./page/Shop";
import Auth from "./page/Auth";
import BookPage from "./page/BookPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: BOOK_ROUTE + '/:id',
        Component: BookPage
    },
]