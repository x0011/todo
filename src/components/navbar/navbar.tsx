import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

export const Navbar = (): ReactElement => {
  return (
    <>
      <nav>
        <div className="nav-wrapper px1">
          <Link to="/" className="brand-logo">
            React + Typescrypt
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Список дел</Link>
            </li>
            <li>
              <Link to="/about">О работе</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="sass.html">Sass</a>
        </li>
        <li>
          <a href="badges.html">Components</a>
        </li>
        <li>
          <a href="collapsible.html">Javascript</a>
        </li>
        <li>
          <a href="mobile.html">Mobile</a>
        </li>
      </ul> */}
    </>
  );
};
