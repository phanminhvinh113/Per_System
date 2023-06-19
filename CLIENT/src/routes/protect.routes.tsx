import { FunctionComponent } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navigate, Outlet, useOutlet } from 'react-router-dom';

const ProtectRoute = ({ children }: { children: JSX.Element }) => {
    const { user }: any = useAuth();
    if (!user || !user.isLogin) return <Navigate to={'/'} replace />;
    const outlet = useOutlet();

    return children ? children : <Outlet />;
};

export default ProtectRoute;
