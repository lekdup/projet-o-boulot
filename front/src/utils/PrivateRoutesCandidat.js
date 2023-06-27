import { Outlet, Navigate, useLocation  } from "react-router-dom";

const PrivateRoutesCandidat = () => {
    const location = useLocation();
    const token = localStorage.getItem('token');
    
    const hasToken = token !== null && token !== undefined;

    return (
        hasToken ? <Outlet/> : <Navigate to="/candidat/login" state={{ from: location }} replace/>
    );
}


export default PrivateRoutesCandidat;