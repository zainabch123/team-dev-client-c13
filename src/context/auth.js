import { createContext, useState } from "react";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null)

    const handleLogin = () => {
        setToken('test-token')
    }

    const handleLogout = () => {
        setToken(null)
    }

    const value = {
        token,
        onLogin: handleLogin,
        onLogout: handleLogout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthProvider
}