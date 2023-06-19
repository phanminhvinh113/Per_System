import { Route } from 'react-router-dom';
import routesSellerPage from '../page/config/pages.seller';
import { routerType } from '../types/router.types';

const pageRoutesSeller = routesSellerPage.map((route: routerType) => {
    // check if seller after login
    //......
    return <Route key={route.title} path={`/seller${route.path}`} element={route.element} />;
});

export default pageRoutesSeller;
