import "./navbar.style.css";

const Navbar = () => (
  <div className="navbar">
    <div className="tabs">
      <div className="info">
        <i className="fa fa-headphones" aria-hidden="true"></i>
        <span>Discover</span>
      </div>
    </div>
    <div className="tabs">
      <div className="info">
        <i className="fa fa-search" aria-hidden="true"></i>
        <span>Search</span>
      </div>
    </div>
    <div className="tabs">
      <div className="info">
        <i className="fa fa-heart" aria-hidden="true"></i>
        <span>Favourite</span>
      </div>
    </div>
    <div className="tabs">
      <div className="info">
        <i className="fa fa-play-circle" aria-hidden="true"></i>
        <span>Playlist</span>
      </div>
    </div>
    <div className="tabs">
      <div className="info">
        <i className="fa fa-bars" aria-hidden="true"></i>
        <span>Charts</span>
      </div>
    </div>
  </div>
);

export default Navbar;
