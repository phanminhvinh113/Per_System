import { FunctionComponent } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';
import routes from '../utils/routes';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

//
interface ProtectRouteProps {
    children: React.ReactNode;
}
const ProtectRoute = () => {
    const user = useSelector((state: RootState) => state.user.user);
    console.log(user);
    return user && user.isLogin ? <Outlet /> : <Navigate to={routes.Login} replace />;
};

export default ProtectRoute;
