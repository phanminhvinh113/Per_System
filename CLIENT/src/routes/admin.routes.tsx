import { Route, Routes } from 'react-router-dom';
import routesAdminPage from '../page/pages.admin';
import { routerType } from '../types/router.types';

const AdminRouter = () => {
    const pageRoutes = routesAdminPage.map((route: routerType) => {
        // check if admin after login
        //......
        return <Route key={route.title} path={route.path} element={route.element} />;
    });
    return <Routes>{pageRoutes}</Routes>;
};
export default AdminRouter;
