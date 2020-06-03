import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../GoogleAuth";

function Header() {
  return (
    <div className="ui top attached tabular menu">
      <Link to="/posts" className="item">
        Phosts
      </Link>
      <Link to="/photos" className="item active">
        Photos
      </Link>
      <GoogleAuth />
      <div className="ui bottom attached segment">
        <p></p>
      </div>
    </div>
  );
}

export default Header;
