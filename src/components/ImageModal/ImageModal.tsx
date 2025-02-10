import { ModalImage } from "../App/App.types";
import s from "./imageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  picture: ModalImage | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, picture }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} shouldCloseOnOverlayClick={true}>
      <div className={s.imgBox}>
        <img className={s.img} src={picture ? picture.modalPict : ""} alt={picture ? picture.altDescr : ""} />
      </div>
    </Modal>
  );
};

export default ImageModal;
