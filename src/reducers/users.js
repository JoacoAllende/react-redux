const initialState = {
  usersList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER": {
      return {
        ...state,
        usersList: [...state.usersList, action.payload.user],
      };
    }
    default:
      return state;
  }
};
