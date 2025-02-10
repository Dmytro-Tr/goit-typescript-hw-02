import { Picture } from "../App/App.types";
import ImageCard from "../imageCard/ImageCard";
import s from "./imageGallery.module.css";

export interface ImageGalleryProps {
  picture: Picture[];
  onImageClick: (picture: { modalPict: string | undefined; altDescr: string }) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ picture, onImageClick }) => {
  return (
    <ul className={s.list}>
      {picture.map(({ id, urls, alt_description }) => (
        <li key={id} className={s.item}>
          <ImageCard
            small={urls.small}
            // regular={urls.regular}
            alt_description={alt_description}
            onImageClick={() => onImageClick({ modalPict: urls.regular, altDescr: alt_description })}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
