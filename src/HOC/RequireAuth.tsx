import React from "react";

import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "../Hooks/useAuth";


interface IRequireAuthProps {
    children: React.ReactElement
}

const RequireAuth: React.FC<IRequireAuthProps> = ({children}) => {
    const {user} = useAuth()
    const location = useLocation()

    //!!!!!!!
    if (user) return <Navigate to="/login" state={{from: location}} replace/>

    return children

}


export {RequireAuth}
