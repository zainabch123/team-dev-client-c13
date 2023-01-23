import { useState } from "react"
import useModal from "../../hooks/useModal"
import Modal from "../modal"
import './style.css'

const CreatePostModal = () => {
    const { closeModal } = useModal()
    const [message, setMessage] = useState(null)

    const onSubmit = () => {
        setMessage('Submit button was clicked! Closing modal in 2 seconds...')

        setTimeout(() => {
            setMessage(null)
            closeModal()
        }, 2000)
    }

    return (
        <Modal header='Create a post'>
            <section className="create-post-user-details">
                <div className="profile-icon"><p>AJ</p></div>
                <div className="post-user-name"><p>Alex J</p></div>
            </section>

            <section>
                <textarea placeholder="What's on your mind?"></textarea>
            </section>

            <button onClick={onSubmit}>Post</button>
            {message && <p>{message}</p>}
        </Modal>
    )
}

export default CreatePostModal