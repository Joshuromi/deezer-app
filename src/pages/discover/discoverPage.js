import React from "react";
import NewReleased from "../../components/new-released/newReleased.component";
import FeaturedPlaylists from "../../components/featured-playlists/featuredPlaylists.component";
import api from "../../services/api";
import "./discoverPage.css";

class DiscoverPage extends React.Component {
  constructor() {
    super();
    this.state = {
      tracks: [],
      playlists: [],
      browse: [],
    };
  }

  componentDidMount() {
    api.get("/chart").then((response) =>
      this.setState({
        tracks: response.data.tracks.data,
        playlists: response.data.playlists.data,
        browse: response.data.albums.data,
      })
    );
  }

  render() {
    const { tracks, playlists, browse } = this.state;
    return (
      <div className="discover">
        <div className="sub-title">
          <p>RELEASED THIS WEEK</p>
          <div className="line"></div>
        </div>
        <NewReleased data={tracks} />
        <div className="sub-title">
          <p>FEATURED PLAYLIST</p>
          <div className="line"></div>
        </div>
        <FeaturedPlaylists data={playlists} />
        <div className="sub-title">
          <p>BROWSE</p>
          <div className="line"></div>
        </div>
      </div>
    );
  }
}

export default DiscoverPage;
