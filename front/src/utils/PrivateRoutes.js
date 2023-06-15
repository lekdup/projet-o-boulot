import { Outlet, Navigate  } from "react-router-dom";

const PrivateRoutes = () => {
    let auth = {'token':false}

    return(
        //verifier à quoi correspond le <Outlet/> /!/
        auth.token ? <Outlet/> : <Navigate to="/candidat/login"/>
    )
}

export default PrivateRoutes;