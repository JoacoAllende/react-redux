import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { trySignIn, trySignOut, onAuthChange } from "../../actions";

function GoogleAuth() {
  const isSignedIn = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    initGoogleAuth();
  }, []);

  const initGoogleAuth = () => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "482436688235-r8eu9v71k20jirueagtr56bmeh3c42uf.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          authChange(null);
          window.gapi.auth2.getAuthInstance().isSignedIn.listen(authChange);
        });
    });
  };

  const authChange = () => {
    dispatch(onAuthChange(window.gapi.auth2.getAuthInstance().isSignedIn));
  };

  const onTrySignIn = () => {
    dispatch(trySignIn(window.gapi.auth2.getAuthInstance()));
  };

  const onTrySignOut = () => {
    dispatch(trySignOut(window.gapi.auth2.getAuthInstance()));
  };

  if (isSignedIn) {
    return (
      <button onClick={onTrySignOut} className="ui google red button">
        <i className="google white icon"></i>
        Log out
      </button>
    );
  } else if (!isSignedIn) {
    return (
      <button onClick={onTrySignIn} className="ui google green button">
        <i className="google white icon"></i>
        Login with Google
      </button>
    );
  }
  return <div />;
}

export default GoogleAuth;
