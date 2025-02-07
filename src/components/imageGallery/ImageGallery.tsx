import ImageCard from "../imageCard/ImageCard";
import s from "./imageGallery.module.css";

const ImageGallery = ({ picture, onImageClick }) => {
  return (
    <ul className={s.list}>
      {picture.map(({ id, urls: { small, regular }, alt_description }) => (
        <li
          key={id}
          className={s.item}
        >
          <ImageCard
            small={small}
            regular={regular}
            alt_description={alt_description}
            onImageClick={() =>
              onImageClick({ modalPict: regular, altDescr: alt_description })
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
