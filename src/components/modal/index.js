import ReactModal from "react-modal"
import useModal from "../../hooks/useModal"
import style from './style.js'
import './style.css'

ReactModal.setAppElement('#root')

const Modal = ({ children, header, width = '612px' }) => {
    const { isOpen, closeModal } = useModal()

    style.content.width = width

    return (
        <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={style}
        >
            <div className="modal-body">
                <section className="modal-header">
                    <h1>{header}</h1>
                    <p onClick={closeModal}>X</p>
                </section>
                
                <section className="modal-content">
                    {children}
                </section>
            </div>
        </ReactModal>
    )
}

export default Modal