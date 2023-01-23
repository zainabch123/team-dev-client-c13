import { useState } from "react"
import useModal from "../../hooks/useModal"
import Modal from "../modal"
import './style.css'
import Button from '../button'

const CreatePostModal = () => {
    const { closeModal } = useModal()
    const [message, setMessage] = useState(null)
    const [text, setText] = useState('')

    const onChange = (e) => {
        setText(e.target.value)
    }

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
                <textarea onChange={onChange} value={text} placeholder="What's on your mind?"></textarea>
            </section>

            <section className="create-post-actions">
                <Button
                    onClick={onSubmit}
                    text='Post'
                    classes={`${text.length ? 'blue' : 'offwhite' } width-full`}
                    disabled={!text.length}
                />
            </section>

            {message && <p>{message}</p>}
        </Modal>
    )
}

export default CreatePostModal