import { Outlet, Navigate  } from "react-router-dom";

const PrivateRoutesCandidat = () => {
    // exemple lors de linstallation de privateRoutes
    // let auth = {'token':false}

    const token = localStorage.getItem('token');
    
    const hasToken = token !== null && token !== undefined;

  return (
    hasToken ? <Outlet/> : <Navigate to="/candidat/login"/>
  );
}


export default PrivateRoutesCandidat;