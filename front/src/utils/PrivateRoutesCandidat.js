import { Outlet, Navigate, useLocation  } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoutesCandidat = () => {
    const { auth } = useAuth();
    const location = useLocation();
    
    return(
        auth?.roles === "ROLE_CANDIDATE" 
            ? <Outlet />
            : <Navigate to="/candidat/login" state={{ from:location }} replace />
    )
}


export default PrivateRoutesCandidat;