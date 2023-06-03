import { routerType } from '../types/router.types';
import NotFoundPage from './home/NotFound.page';
import { Navigate } from 'react-router-dom';
import User from './admin/User.page';
const routesAdminPage: routerType[] = [
    {
        path: '/admin/user',
        title: 'manage user',
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
export default routesAdminPage;
