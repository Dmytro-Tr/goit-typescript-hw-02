import { Picture } from "../App/App.types";
import s from "./imageCard.module.css";

interface ImageCardProps {
  small: string;
  alt_description: string;
  onImageClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ small, alt_description, onImageClick }) => {
  return (
    <div className={s.imgBox}>
      <img className={s.img} src={small} alt={alt_description} onClick={onImageClick} />
    </div>
  );
};

export default ImageCard;
