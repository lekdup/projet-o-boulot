import { Outlet, Navigate  } from "react-router-dom";

const PrivateRoutesCandidat = () => {
    const token = localStorage.getItem('token');
    
    const hasToken = token !== null && token !== undefined;

    return (
        hasToken ? <Outlet/> : <Navigate to="/candidat/login"/>
    );
}


export default PrivateRoutesCandidat;