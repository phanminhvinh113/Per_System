import { Route, Routes } from 'react-router-dom';
import { routerType } from '../types/router.types';
import routesDefaultPage from '../page/config/pages.default';
import routesAdminPage from '../page/config/pages.admin';
import routesSellerPage from '../page/config/pages.seller';
import routesProtectPage from '../page/config/pages.protect';
import ProtectRoute from '../utils/ProtectRoute';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

//
const pageRoutesAdmin = routesAdminPage.map((route: routerType) => {
    return <Route key={route.title} path={`/admin${route.path}`} element={route.element} />;
});
const pageRoutesSeller = routesSellerPage.map((route: routerType) => {
    return <Route key={route.title} path={`/seller${route.path}`} element={route.element} />;
});
//
const pageRoutes = routesDefaultPage.map((route: routerType) => (
    <Route key={route.title} path={route.path} element={route.element} />
));
//
const pagePrivateRoutes = (
    <Route element={<ProtectRoute />}>
        {routesProtectPage.map((route: routerType) => (
            <Route key={route.title} path={route.path} element={route.element} />
        ))}
    </Route>
);
//
const Router = () => {
    //
    const user = useSelector((state: RootState) => state.user.user);
    //
    return (
        <Routes>
            {user && user.isLogin && pageRoutesAdmin}
            {pageRoutesSeller}
            {pagePrivateRoutes}
            {pageRoutes}
        </Routes>
    );
};
export default Router;
