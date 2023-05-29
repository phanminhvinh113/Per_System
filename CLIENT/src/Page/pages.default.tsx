import { routerType } from '../types/router.types';
import Register from './Access/Register';
import Home from './Home/HomePage';

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
];
