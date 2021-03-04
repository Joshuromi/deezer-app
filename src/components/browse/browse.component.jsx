import Track from "../track/track.component";
import "./browse.style.css";

const Browse = ({ data }) => (
  <div className="browse">
    <div className="browse-row">
      {data.map((item) => (
        <Track key={item.id} imgUrl={item.cover_medium} title={item.title} />
      ))}
    </div>
  </div>
);

export default Browse;
