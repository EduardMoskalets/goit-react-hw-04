import css from './ImageCarrd.module.css';

export default function ImageCard({ small, regular, description, onClick }) {
  const handleClick = () => {
    onClick(regular);
  };

  return (
    <div>
      <img
        className={css.gallery_image}
        src={small}
        alt={description}
        onClick={handleClick}
      />
    </div>
  );
}