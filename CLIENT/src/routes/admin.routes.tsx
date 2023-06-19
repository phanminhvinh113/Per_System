import { Route, Routes } from 'react-router-dom';
import routesAdminPage from '../page/config/pages.admin';
import { routerType } from '../types/router.types';

const Router = () => {
    const pageRoutes = routesAdminPage.map((route: routerType) => {
        // check if admin after login
        //......
        return <Route key={route.title} path={`/admin${route.path}`} element={route.element} />;
    });
    return <Routes>{pageRoutes}</Routes>;
};
export default Router;
