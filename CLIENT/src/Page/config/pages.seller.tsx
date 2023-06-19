import { routerType } from '../../types/router.types';
import NotFoundPage from '../home/NotFound.page';
import { Navigate } from 'react-router-dom';
import User from '../admin/User.page';
const routesSellerPage: routerType[] = [
    {
        path: '/home',
        title: 'Seller Page',
        element: <User />,
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
export default routesSellerPage;
