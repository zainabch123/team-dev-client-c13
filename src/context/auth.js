import { createContext, useState } from "react"
import { useNavigate, useLocation, Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const [token, setToken] = useState(null)

    const handleLogin = () => {
        setToken('test-token')

        navigate(location.state?.from?.pathname || '/')
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

const ProtectedRoute = ({ children }) => {
    const { token } = useAuth()
    const location = useLocation()

    if (!token) {
        return <Navigate to={'/login'} replace state={{ from: location }} />
    }

    return children
}

export {
    AuthContext,
    AuthProvider,
    ProtectedRoute
}