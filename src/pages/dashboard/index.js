import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
    const { token } = useAuth()

    return (
        <>
            <p>Hello, {token}!</p>
        </>
    );
}

export default Dashboard