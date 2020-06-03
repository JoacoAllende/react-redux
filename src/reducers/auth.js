const initialState = {
  isSignedIn: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "TRY_SIGN_IN": {
      action.payload.auth.signIn();
      return {
        ...state,
      };
    }
    case "TRY_SIGN_OUT": {
      action.payload.auth.signOut();
      return { ...state };
    }
    case "ON_CHANGE_AUTH": {
      return { ...state, isSignedIn: action.payload.signed.get() };
    }
    default:
      return state;
  }
};
