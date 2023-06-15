import { Outlet, Navigate  } from "react-router-dom";

const PrivateRoutesEntreprise = () => {
    let auth = {'token':false}
    
    return(
        //verifier à quoi correspond le <Outlet/> /!/
        auth.token ? <Outlet/> : <Navigate to="/entreprise/login"/>
    )
}

export default PrivateRoutesEntreprise;