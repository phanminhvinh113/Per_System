import { routerType } from '../../types/router.types';
import NotFoundPage from '../home/NotFound.page';
import { Navigate } from 'react-router-dom';
import Seller from '../seller/Seller.page';

const routesSellerPage: routerType[] = [
    {
        path: '/home',
        title: 'Seller Page',
        element: <Seller />,
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
