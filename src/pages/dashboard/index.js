import Card from "../../components/card";
import CreatePostModal from "../../components/createPostModal";
import Posts from "../../components/posts";
import useModal from "../../hooks/useModal";
import './style.css'

const Dashboard = () => {
    const { openModal } = useModal()

    return (
        <>
            <main>
                <Card>
                    <h5>What's on your mind?</h5>
                    <button onClick={openModal}>Click!</button>

                    <CreatePostModal />
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