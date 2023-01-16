import useAuth from "../../hooks/useAuth"

const Header = () => {
    const { token } = useAuth()

    if (!token) {
        return null
    }

    return (
        <header>
            <h1>Cohort Manager</h1>
        </header>
    )
}

export default Header