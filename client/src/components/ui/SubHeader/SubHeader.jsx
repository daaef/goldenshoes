import React from "react";
import "./SubHeader.css";

const SubHeader = ({ gender, categories }) => (
  <nav className="hide-on-small-and-down">
    <div className="sub-nav nav-wrapper">
      <ul className="left">
        {categories[gender].map(({ name, link }, k) => (
          <li key={k}>
            <a href={link}>{name.toUpperCase()}</a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default SubHeader;
