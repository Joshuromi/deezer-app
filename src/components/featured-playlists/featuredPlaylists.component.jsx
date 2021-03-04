import Track from "../track/track.component";
import "./featuredPlaylists.styles.css";

const FeaturedPlaylists = ({ data }) => (
  <div className="playlists">
    <div className="playlist-row">
      {data.map((item) => (
        <Track key={item.id} imgUrl={item.picture_medium} title={item.title} />
      ))}
    </div>
  </div>
);

export default FeaturedPlaylists;
