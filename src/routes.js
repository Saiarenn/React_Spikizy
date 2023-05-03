import { ADMIN_ROUTE, BASKET_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, COURSE_ROUTE, USER_ROUTE } from "./utils/consts"
import Admin from "./page/Admin"
import Basket from "./page/Basket"
import Home from "./page/Home"
import Auth from "./page/Auth"
import Shop from "./page/Shop"
import CoursePage from "./page/CoursePage"
import Profile from "./page/Profile"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        component: Admin
    },
    {
        path: BASKET_ROUTE,
        component: Basket
    },
    {
        path: USER_ROUTE + '/:id',
        component: Profile
    },
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        component: Home
    },
    {
        path: LOGIN_ROUTE,
        component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        component: Auth
    },
    {
        path: COURSE_ROUTE,
        component: Shop
    },
    {
        path: COURSE_ROUTE + '/:id',
        component: CoursePage
    },
]