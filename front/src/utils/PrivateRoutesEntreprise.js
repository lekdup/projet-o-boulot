import { Outlet, Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoutesEntreprise = () => {
    const { auth } = useAuth();
    const location = useLocation();
    
    return(
        auth?.token 
            ? <Outlet />
            : <Navigate to="/entreprise/login" state={{ from:location }} replace />
    )
}

export default PrivateRoutesEntreprise;