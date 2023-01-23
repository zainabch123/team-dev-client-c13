import FullLogo from "../../assets/fullLogo"
import useAuth from "../../hooks/useAuth"
import './style.css'

const Header = () => {
    const { token } = useAuth()

    if (!token) {
        return null
    }

    return (
        <header>
            <FullLogo textColour="white" />
        </header>
    )
}

export default Header