const initialState = {
  photos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PHOTOS": {
      return {
        ...state,
        photos: action.payload.photos,
      };
    }
    default:
      return state;
  }
};
