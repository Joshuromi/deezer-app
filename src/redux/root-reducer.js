import { combineReducers } from "redux";
import trackPlayerReducer from "./track-player/trackPlayer.reducer";

const rootReducer = combineReducers({
  track: trackPlayerReducer,
});

export default rootReducer;
