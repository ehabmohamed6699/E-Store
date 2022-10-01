import React from "react";
import { Link } from "react-router-dom";

const NavLink = (props) => {
  console.log(props);

  return (
    <>
      <div className="nav-item">
        <Link className="nav-link" to={props.data}>
          {props.content}
        </Link>
      </div>
    </>
  );
};

export default NavLink;
