import { Route, Routes } from 'react-router-dom';
import { routerType } from '../types/router.types';
import routesDefaultPage from '../page/config/pages.default';
import routesAdminPage from '../page/config/pages.admin';
import routesSellerPage from '../page/config/pages.seller';
//
const pageRoutesAdmin = routesAdminPage.map((route: routerType) => {
    // check if admin after login
    //......
    return <Route key={route.title} path={`/admin${route.path}`} element={route.element} />;
});
const pageRoutesSeller = routesSellerPage.map((route: routerType) => {
    // check if seller after login
    //......
    return <Route key={route.title} path={`/seller${route.path}`} element={route.element} />;
});
//
const pageRoutes = routesDefaultPage.map((route: routerType) => (
    <Route key={route.title} path={route.path} element={route.element} />
));
//
const Router = () => {
    //
    return (
        <Routes>
            {pageRoutesAdmin}
            {pageRoutesSeller}
            {pageRoutes}
        </Routes>
    );
};
export default Router;
