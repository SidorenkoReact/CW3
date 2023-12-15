import { AuthContext } from "../Context"
import React, {useState} from "react";
import {TUser} from "../types/types";


interface IAuthProviderProps {
    children: React.ReactNode
}

const AuthProvider: React.FC<IAuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<TUser>(null)

    function signIn (newUser: TUser, callback: Function) {
        setUser(newUser)
        callback()
    }

    function signOut (callback: Function) {
        setUser(null)
        callback()
    }

    const value = {user, signIn, signOut}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


export {AuthProvider}