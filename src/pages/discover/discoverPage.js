import React from "react";
import NewReleased from "../../components/new-released/newReleased.component";
import FeaturedPlaylists from "../../components/featured-playlists/featuredPlaylists.component";
import Browse from "../../components/browse/browse.component";
import TrackPlayer from "../../components/track-player/trackPlayer.component";
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
          <span> &#10094;</span>
          <span> &#10095;</span>
        </div>
        <NewReleased data={tracks} />
        <div className="sub-title">
          <p>FEATURED PLAYLIST</p>
          <div className="line"></div>
          <span> &#10094;</span>
          <span> &#10095;</span>
        </div>
        <FeaturedPlaylists data={playlists} />
        <div className="sub-title">
          <p>BROWSE</p>
          <div className="line"></div>
          <span> &#10094;</span>
          <span> &#10095;</span>
        </div>
        <Browse data={browse} />
        <TrackPlayer />
      </div>
    );
  }
}

export default DiscoverPage;
