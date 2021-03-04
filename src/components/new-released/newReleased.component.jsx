import Track from "../track/track.component";
import "./newReleased.styles.css";

const NewReleased = ({ data }) => {
  return (
    <div className="tracks">
      <div className="track-row">
        {data.map((item) => (
          <Track
            key={item.id}
            imgUrl={item.album.cover_medium}
            title={item.title}
            preview={item.preview}
          />
        ))}
      </div>
    </div>
  );
};

export default NewReleased;
