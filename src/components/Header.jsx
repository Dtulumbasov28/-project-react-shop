import React from "react";

function Header() {
  return (
    <nav className="cyan darken-1">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          React Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/Dtulumbasov28/project-react-shop">
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
