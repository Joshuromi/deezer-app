import "./track.styles.css";

const Track = ({ id, imgUrl, title }) => (
  <div className="track-item" key={id}>
    <img src={imgUrl} alt="thumnail" />
    <p>{title}</p>
  </div>
);

export default Track;
