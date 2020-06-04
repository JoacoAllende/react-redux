const initialState = {
  auth: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN": {
      return { ...state };
    }
    case "SIGN_OUT": {
      return { ...state };
    }
    case "ON_CHANGE_AUTH": {
      return { ...state, auth: action.payload.signed.get() };
    }
    default:
      return state;
  }
};
