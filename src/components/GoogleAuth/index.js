import React, { useEffect } from "react";
import { connect } from "react-redux";

import { trySignIn, trySignOut, onAuthChange } from "../../actions";

function GoogleAuth(props) {
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
          onAuthChange(null);
          window.gapi.auth2.getAuthInstance().isSignedIn.listen(onAuthChange);
        });
    });
  };

  const onAuthChange = () => {
    props.onAuthChange(window.gapi.auth2.getAuthInstance().isSignedIn);
  };

  const onTrySignIn = () => {
    props.trySignIn(window.gapi.auth2.getAuthInstance());
  };

  const onTrySignOut = () => {
    props.trySignOut(window.gapi.auth2.getAuthInstance());
  };

  const { isSignedIn } = props;
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

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.auth };
};

const mapDispatchToProps = (dispatch) => ({
  trySignIn: (auth) => dispatch(trySignIn(auth)),
  trySignOut: (auth) => dispatch(trySignOut(auth)),
  onAuthChange: (signed) => dispatch(onAuthChange(signed)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);
