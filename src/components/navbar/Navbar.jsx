import React from "react";
import classes from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={classes.navContainer}>
      <span className={classes.title}>films&dramas</span>
      <ul>
        <li className={classes.active}>Home</li>
        <li>Browse</li>
        {/* <li>TV Shows</li> */}
      </ul>
    </div>
  );
};

export default Navbar;
