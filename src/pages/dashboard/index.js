import Posts from "../../components/posts";
import './style.css'

const Dashboard = () => {
    return (
        <>
            <main>
                <Posts />
            </main>

            <aside>
                <p>Cohort list here</p>
            </aside>
        </>
    );
}

export default Dashboard