import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/calendar">
        <button>Calendar</button>
      </Link>
      <Link to="/friends">
        <button>Friends</button>
      </Link>
      <Link to="/settings">
        <button>Settings</button>
      </Link>
    </nav>
  );
}

export default Nav;
