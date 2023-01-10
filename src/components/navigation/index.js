import { NavLink } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import Button from "../button"

const Navigation = () => {
    const { token, onLogout } = useAuth()

    return (
        <nav>
            <NavLink to='/'>Dashboard</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Register</NavLink>

            {token && <Button text='Logout' onClick={onLogout} />}
        </nav>
    )
}

export default Navigation