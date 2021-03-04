import MusicLogo from "../../assest/musical-note.svg";
import "./trackPlayer.styles.css";

const TrackPlayer = () => (
  <div className="track-player">
    <div className="image">
      <img src={MusicLogo} alt="music" />
    </div>
    <div className="controls">
      <i className="fa fa-step-backward" aria-hidden="true"></i>
      <i className={"fa fa-play-circle"} aria-hidden="true"></i>
      <i className="fa fa-step-forward" aria-hidden="true"></i>
    </div>
    <div className="bar">
      <div className="progress-bar"></div>
    </div>
    <div className="options">
      <i className="fa fa-heart" aria-hidden="true"></i>
      <i className="fa fa-random" aria-hidden="true"></i>
      <i className="fa fa-retweet" aria-hidden="true"></i>
      <i className="fa fa-volume-up" aria-hidden="true"></i>
    </div>
  </div>
);
export default TrackPlayer;
