import s from "./imageCard.module.css";

const ImageCard = ({ small, alt_description, onImageClick }) => {
  return (
    <div className={s.imgBox}>
      <img
        className={s.img}
        src={small}
        alt={alt_description}
        onClick={onImageClick}
      />
    </div>
  );
};

export default ImageCard;
