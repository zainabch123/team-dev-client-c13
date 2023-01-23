import ReactModal from "react-modal"
import useModal from "../../hooks/useModal"

ReactModal.setAppElement('#root')

const Modal = () => {
    const { isOpen, closeModal } = useModal()

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={closeModal}
        >
            <p>Modal initiate!</p>
            <button onClick={closeModal}>Close</button>
        </ReactModal>
    )
}

export default Modal