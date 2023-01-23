import Button from "../../components/button";
import Card from "../../components/card";
import CreatePostModal from "../../components/createPostModal";
import Posts from "../../components/posts";
import useModal from "../../hooks/useModal";
import './style.css'

const Dashboard = () => {
    // Use the useModal hook to get the openModal and setModal functions
    const { openModal, setModal } = useModal()

    // Create a function to run on user interaction
    const showModal = () => {
        // Use setModal to set the header of the modal and the component the modal should render
        setModal('Create a post', <CreatePostModal />) // CreatePostModal is just a standard React component, nothing special

        // Open the modal!
        openModal()
    }

    return (
        <>
            <main>
                <Card>
                    <div className="create-post-input">
                        <div className="profile-icon"><p>AJ</p></div>
                        <Button text="What's on your mind?" onClick={showModal} />
                    </div>
                    
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