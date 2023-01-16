import Button from "../../components/button"
import useAuth from "../../hooks/useAuth"

const Login = () => {
    const { onLogin } = useAuth()
    
    return (
        <>
            <p>Login</p>

            <div>
                <form>
                    <label for="email">Email *</label>
                    <input type="text"></input>

                    <label for="email">Password *</label>
                    <input type="text"></input>
                </form>
            </div>

            <Button text='Login' onClick={onLogin} />
        </>
    )
}

export default Login