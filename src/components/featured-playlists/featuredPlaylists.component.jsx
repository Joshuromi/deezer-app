import "./featuredPlaylists.styles.css";

const FeaturedPlaylists = ({ data }) => (
  <div className="playlists">
    <div className="playlist-row">
      {data.map((item) => (
        <div className="playlist-item" key={item.id}>
          <img src={item.picture_medium} alt="thumnail" />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeaturedPlaylists;
