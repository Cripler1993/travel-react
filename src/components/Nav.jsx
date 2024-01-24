import React from "react";
import logo from "../img/logo.png";

export default function Nav() {
  return (
    <nav className="myNav">
      <img src={logo} />
      <span>My Travel Journal.</span>
    </nav>
  );
}
