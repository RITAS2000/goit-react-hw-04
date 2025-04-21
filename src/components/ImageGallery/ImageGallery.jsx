import ImageCard from '../ImageCard/ImageCard.jsx';
import css from './ImageGallery.module.css';

export default function Imagegallery({ images, onImageClick }) {
  return (
    <ul className={css.container}>
      {images.map((image) => {
        return (
          <li key={image.id} className={css.comtainerItem}>
            <ImageCard
              src={image.urls.small}
              alt={image.alt_description}
              onClick={() => onImageClick(image)}
            />
          </li>
        );
      })}
    </ul>
  );
}
