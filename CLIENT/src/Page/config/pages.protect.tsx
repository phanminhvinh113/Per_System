import { routerType } from '../../types/router.types';
import Cart from '../cart/Cart.page';

//
const routesProtectPage: routerType[] = [
    {
        path: '/cart',
        title: 'cart',
        element: <Cart />,
    },
];
export default routesProtectPage;
