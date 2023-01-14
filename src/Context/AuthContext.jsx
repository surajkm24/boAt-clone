import { createContext, useContext, useState } from "react";
import { checkUser } from "../controllers/auth.controllers";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState(checkUser());
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}