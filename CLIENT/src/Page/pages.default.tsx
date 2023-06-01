import { routerType } from '../types/router.types';
import Register from './Access/Register.page';
import Home from './Home/Home.page';
import Cart from './Cart/Cart.page';
import NotFoundPage from './Home/NotFound.page';
import { Navigate } from 'react-router-dom';
const routesDefaultPage: routerType[] = [
    {
        path: '/',
        title: 'home',
        element: <Home />,
    },
    {
        path: '/register',
        title: 'register',
        element: <Register />,
    },
    {
        path: '/cart',
        title: 'cart',
        element: <Cart />,
    },
    {
        path: '*',
        title: '404 page',
        element: <Navigate to="/404" replace />,
    },
    {
        path: '/404',
        title: '404 page',
        element: <NotFoundPage />,
    },
];
export default routesDefaultPage;
