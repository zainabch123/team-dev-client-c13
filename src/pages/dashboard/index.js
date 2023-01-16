import Header from "../../components/header";
import Navigation from "../../components/navigation";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
    const { token } = useAuth()

    return (
        <>
            <Header/>
            <Navigation/>
        </>
    );
}

export default Dashboard