import React from "react";
import { connect } from "react-redux";

import { trySignIn, trySignOut, onAuthChange } from "../../actions";

class GoogleAuth extends React.Component {
  constructor(props) {
    super(props);
    this.initGoogleAuth = this.initGoogleAuth.bind(this);
    this.onAuthChange = this.onAuthChange.bind(this);
    this.onTrySignIn = this.onTrySignIn.bind(this);
    this.onTrySignOut = this.onTrySignOut.bind(this);
  }

  componentDidMount() {
    this.initGoogleAuth();
  }

  initGoogleAuth() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "482436688235-r8eu9v71k20jirueagtr56bmeh3c42uf.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(null);
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange() {
    this.props.onAuthChange(this.auth.isSignedIn);
  }

  onTrySignIn() {
    this.props.trySignIn(this.auth);
  }

  onTrySignOut() {
    this.props.trySignOut(this.auth);
  }

  render() {
    const { isSignedIn } = this.props;
    if (isSignedIn) {
      return (
        <button onClick={this.onTrySignOut} className="ui google red button">
          <i className="google white icon"></i>
          Log out
        </button>
      );
    } else if (!isSignedIn) {
      return (
        <button onClick={this.onTrySignIn} className="ui google green button">
          <i className="google white icon"></i>
          Login with Google
        </button>
      );
    }
    return <div />;
  }
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
