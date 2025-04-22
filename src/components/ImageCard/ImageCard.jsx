import css from './ImageCard.module.css';

export default function ImageCard({ src, alt_description, onClick }) {
  return (
    <>
      <img
        src={src}
        alt={alt_description}
        className={css.img}
        onClick={onClick}
      />
    </>
  );
}
