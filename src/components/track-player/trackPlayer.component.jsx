import { connect } from "react-redux";
import { updatePlayer } from "../../redux/track-player/trackPlayer.action";
import "./trackPlayer.styles.css";

const TrackPlayer = ({ track, updatePlayer }) => {
  let { title, img, preview, isPlaying } = track;

  const playPause = () => {
    const audio = document.getElementById("player");
    if (isPlaying === false) {
      audio.play();
      updatePlayer({
        img,
        title,
        preview,
        isPlaying: true,
      });
    } else {
      audio.pause();
      updatePlayer({
        img: img,
        title: title,
        preview,
        isPlaying: false,
      });
    }
  };

  return (
    <div className="track-player">
      <audio src={preview} id="player" autoPlay></audio>
      <div className="image">
        <img src={img} alt="music" />
      </div>
      <div className="controls">
        <i className="fa fa-step-backward" aria-hidden="true"></i>
        <i
          className={isPlaying ? "fa fa-pause-circle" : "fa fa-play-circle"}
          onClick={() => playPause()}
          style={{ fontSize: "50px", color: "#574fd8" }}
          aria-hidden="true"
        ></i>
        <i className="fa fa-step-forward" aria-hidden="true"></i>
      </div>
      <div className="bar">
        <div className="progress-bar"></div>
        <p className="title">{title}</p>
      </div>
      {/* <div className="options">
        <i className="fa fa-heart" aria-hidden="true"></i>
        <i className="fa fa-random" aria-hidden="true"></i>
        <i className="fa fa-retweet" aria-hidden="true"></i>
        <i className="fa fa-volume-up" aria-hidden="true"></i>
      </div> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  track: state.track,
});

const mapDispatchToprops = (dispatch) => ({
  updatePlayer: (track) => dispatch(updatePlayer(track)),
});

export default connect(mapStateToProps, mapDispatchToprops)(TrackPlayer);
