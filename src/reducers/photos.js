const initialState = {
  photosList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PHOTOS": {
      return {
        ...state,
        photosList: action.payload.photos,
      };
    }
    default:
      return state;
  }
};
