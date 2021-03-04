import Track from "../track/track.component";
import "./browse.style.css";

const Browse = ({ data }) => (
  <div className="browse">
    <div className="browse-row">
      {data.map((item) => (
        <Track
          id={item.id}
          imgUrl={item.artist.picture_medium}
          title={item.title}
        />
      ))}
    </div>
  </div>
);

export default Browse;