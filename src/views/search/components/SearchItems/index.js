import './styles.css'
export default function SearchItems({title, genre, platform, thumbnail, website}) {
  return (
    <li onClick={() =>  window.open(website, '_blank')}>
      <div className="info-game">
        <p>
          <span className="txt-bold">Title:</span>
          {title}
        </p>
        <p>
          <span className="txt-bold">Genre:</span>
          {genre}
        </p>
        <p>
          <span className="txt-bold">Platform:</span>
          {platform}
        </p>
      </div>
      <img className="thumbnail-game" src={thumbnail} alt={`thumbnail of ${title}`} />
    </li>
  );
}