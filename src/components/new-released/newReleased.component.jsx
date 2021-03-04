import "./newReleased.styles.css";

const NewReleased = ({ data }) => (
  <div className="tracks">
    <div className="track-row">
      {data.map((item) => (
        <div className="track-item" key={item.id}>
          <img src={item.artist.picture_medium} alt="thumnail" />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  </div>
);

export default NewReleased;
