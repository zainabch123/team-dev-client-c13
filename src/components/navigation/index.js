import { NavLink } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import Button from "../button"
import './style.css'

const Navigation = () => {
    const { token, onLogout } = useAuth()

    if (!token) {
        return null
    }

    return (
        <nav>
            <ul>
                <li><NavLink to='/'>Dashboard</NavLink></li>
                <li><NavLink to='/login'>Login</NavLink></li>
                <li><NavLink to='/register'>Register</NavLink></li>
            </ul>
            
            {token && <Button text='Logout' onClick={onLogout} />}
        </nav>
    )
}

export default Navigation