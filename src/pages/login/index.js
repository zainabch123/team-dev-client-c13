import Button from "../../components/button"
import useAuth from "../../hooks/useAuth"

const Login = () => {
    const { onLogin } = useAuth()
    
    return (
        <>
            <p>Login!</p>

            <Button text='Login' onClick={onLogin} />
        </>
    )
}

export default Login