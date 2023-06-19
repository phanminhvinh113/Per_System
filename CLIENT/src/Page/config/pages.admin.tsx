import { routerType } from '../../types/router.types';
import User from '../admin/User.page';
const routesAdminPage: routerType[] = [
    {
        path: '/user',
        title: 'manage user',
        element: <User />,
    },
];
export default routesAdminPage;
