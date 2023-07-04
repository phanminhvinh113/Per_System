import { routerType } from '../../types/router.types';
import Register from '../access/Register.page';
import Home from '../home/Home.page';
import Cart from '../cart/Cart.page';
import NotFoundPage from '../home/NotFound.page';
import { Navigate } from 'react-router-dom';
import Login from '../access/Login.page';
//
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
    { path: '/login', title: 'login', element: <Login /> },
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
