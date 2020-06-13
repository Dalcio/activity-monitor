import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Toggle,
  Navside,
  Navlist,
  NavItem,
  NavHeader,
  NavFooter,
} from "./NavSidebar";

function Sidebar({ setPW }) {
  const [navW, setNavW] = useState("50px");
  const [d, setD] = useState("none");
  const [scrollH, setScrollH] = useState("hidden");
  return (
    <Navside width={navW} class="" id="nav-content">
      <Toggle
        id="toggle"
        onClick={() => {
          if (navW === "30%") {
            setNavW("50px");
            setPW("calc(100% - 50px)");
            setD("none");
            setScrollH("hidden");
          } else {
            setNavW("30%");
            setPW("70%");
            setD("block");
            setScrollH("scroll");
          }
        }}
      >
        t
      </Toggle>
      <Navlist display={d} scroll={scrollH}>
        <Link to="/">
          <NavItem> Dashboard</NavItem>
        </Link>
        <NavHeader>Utilities</NavHeader>
        <Link to="/optimize">
          <NavItem>Optimize</NavItem>
        </Link>
        <Link to="/uninstaller">
          <NavItem>Uninstaller</NavItem>
        </Link>
        <Link to="/clean">
          <NavItem>Clean</NavItem>
        </Link>
        <Link to="/trim">
          <NavItem>Trim</NavItem>
        </Link>
        <NavHeader>Hardware</NavHeader>
        <Link to="/storage">
          <NavItem>Storage</NavItem>
        </Link>
        <Link to="/graphics">
          <NavItem>Graphics</NavItem>
        </Link>
        <Link to="/cooling">
          <NavItem>Cooling</NavItem>
        </Link>
      </Navlist>
      <Link to="/settings">
        <NavFooter className="footer" display={d}>
          Settings
        </NavFooter>
      </Link>
    </Navside>
  );
}

export default Sidebar;
