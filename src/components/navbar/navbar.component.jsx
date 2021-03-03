import "./navbar.style.css";

const Navbar = () => (
  <div className="navbar">
    <div className="tabs">
      <div>
        <i class="fa fa-headphones" aria-hidden="true"></i>Discover
      </div>
    </div>
    <div className="tabs">
      <div>
        <i class="fa fa-search" aria-hidden="true"></i>Search
      </div>
    </div>
    <div className="tabs">
      <div>
        <i class="fa fa-heart" aria-hidden="true"></i>Favourite
      </div>
    </div>
    <div className="tabs">
      <div>
        <i class="fa fa-play-circle" aria-hidden="true"></i>Playlist
      </div>
    </div>
    <div className="tabs">
      <div>
        <i class="fa fa-bars" aria-hidden="true"></i>Charts
      </div>
    </div>
  </div>
);

export default Navbar;
