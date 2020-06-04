const initialState = {
  postsList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS": {
      return {
        ...state,
        postsList: action.payload.posts,
      };
    }
    default:
      return state;
  }
};
