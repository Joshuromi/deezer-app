import React from "react";
import NewReleased from "../../components/new-released/newReleased.component";
import FeaturedPlaylists from "../../components/featured-playlists/featuredPlaylists.component";
import Browse from "../../components/browse/browse.component";
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
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
    };

    fetch("https://api.deezer.com/chart",
      {
        method: "GET",
        config
      }).then(res => res.json())
      .then(data => this.setState({
        tracks: data.tracks.data,
        playlists: data.playlists.data,
        browse: data.albums.data,
      }));
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
      </div>
    );
  }
}

export default DiscoverPage;
