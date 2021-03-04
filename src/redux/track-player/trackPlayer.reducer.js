const INITIAL_STATE = {
  img: "https://www.colorcombos.com/images/colors/663399.png",
  title: "Nothing to play",
  preview: null,
  isPlaying: false,
};

const trackPlayerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_TRACK_DETAILS":
      return {
        ...state,
        img: action.payload.img,
        title: action.payload.title,
        preview: action.payload.preview,
        isPlaying: action.payload.isPlaying,
      };
    default:
      return state;
  }
};

export default trackPlayerReducer;
