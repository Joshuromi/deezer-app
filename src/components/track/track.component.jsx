import { connect } from "react-redux";
import { updatePlayer } from "../../redux/track-player/trackPlayer.action";
import "./track.styles.css";

const Track = ({ imgUrl, title, preview, updatePlayer }) => {
  const track = { img: imgUrl, title, preview };
  return (
    <div className="track-item" onClick={() => updatePlayer(track)}>
      <img src={imgUrl} alt="thumnail" />
      <p>{title}</p>
    </div>
  );
};

const mapDispatchToprops = (dispatch) => ({
  updatePlayer: (track) => dispatch(updatePlayer(track)),
});

export default connect(null, mapDispatchToprops)(Track);
