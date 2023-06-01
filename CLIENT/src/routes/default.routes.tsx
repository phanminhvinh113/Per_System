import { Route, Routes } from 'react-router-dom';
import { routerType } from '../types/router.types';
import routesDefaultPage from '../page/pages.default';

const Router = () => {
    const pageRoutes = routesDefaultPage.map((route: routerType) => (
        <Route key={route.title} path={route.path} element={route.element} />
    ));
    return <Routes>{pageRoutes}</Routes>;
};
export default Router;
