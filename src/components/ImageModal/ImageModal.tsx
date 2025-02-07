import s from "./imageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, picture }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
    >
      <div className={s.imgBox}>
        <img
          className={s.img}
          src={picture ? picture.modalPict : {}}
          alt={picture ? picture.altDescr : {}}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
