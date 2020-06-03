export const getPosts = () => ({
  type: "GET_POSTS",
});

export const cancelGetPosts = () => ({
  type: "CANCEL_GET_POSTS",
});

export const getUsers = (userId) => ({
  type: "GET_USERS",
  userId,
});

export const getPhotos = () => ({
  type: "GET_PHOTOS",
});

export const trySignIn = (auth) => ({
  type: "TRY_SIGN_IN",
  payload: { auth },
});

export const trySignOut = (auth) => ({
  type: "TRY_SIGN_OUT",
  payload: { auth },
});

export const onAuthChange = (signed) => ({
  type: "ON_CHANGE_AUTH",
  payload: { signed },
});
