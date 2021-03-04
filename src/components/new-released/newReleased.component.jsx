import Track from "../track/track.component";
import "./newReleased.styles.css";

const NewReleased = ({ data }) => (
  <div className="tracks">
    <div className="track-row">
      {data.map((item) => (
        <Track
          id={item.id}
          imgUrl={item.album.cover_medium}
          title={item.title}
        />
      ))}
    </div>
  </div>
);

export default NewReleased;
