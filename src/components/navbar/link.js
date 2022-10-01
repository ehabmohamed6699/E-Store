import React from "react";
import { HashLink } from "react-router-hash-link";

const NavLink = (props) => {
  console.log(props);

  return (
    <>
      <div className="nav-item">
        <HashLink className="nav-link" to={props.data}>
          {props.content}
        </HashLink>
      </div>
    </>
  );
};

export default NavLink;
