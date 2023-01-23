import Card from "../../components/card";
import Posts from "../../components/posts";
import './style.css'

const Dashboard = () => {
    return (
        <>
            <main>
                <Card>
                    <h5>What's on your mind?</h5>
                </Card>
                
                <Posts />
            </main>

            <aside>
                <Card>
                    <h4>My Cohort</h4>
                </Card>
            </aside>
        </>
    );
}

export default Dashboard