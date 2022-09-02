import { useState, createContext, useContext } from "react";

const AutContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }

    return <AutContext.Provider value={{ user, login, logout }}>
        {children}
    </AutContext.Provider>
}

export const useAuth = () => {
    return useContext(AutContext)
}