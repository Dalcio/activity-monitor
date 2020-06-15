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
import {
  BsList,
  BsLaptop,
  BsBatteryCharging,
  BsGearWideConnected,
  BsTrash2Fill,
} from "react-icons/bs";
import { FaAppStoreIos, FaBuromobelexperte } from "react-icons/fa";
import { GrCloudlinux } from "react-icons/gr";
import { IoIosSpeedometer } from "react-icons/io";
import { MdStorage } from "react-icons/md";
import { FiCpu } from "react-icons/fi";

function Sidebar({ setPW }) {
  const [navW, setNavW] = useState("50px");
  const [d, setD] = useState("none");
  const [scrollH, setScrollH] = useState("hidden");
  return (
    <Navside width={navW} id="nav-content">
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
        <BsList />
      </Toggle>
      <Navlist display={d} scroll={scrollH}>
        <Link to="/">
          <NavItem>
            <BsLaptop id="ico" />
            Dashboard
          </NavItem>
        </Link>
        <NavHeader>Utilities</NavHeader>
        <Link to="/optimize">
          <NavItem>
            <IoIosSpeedometer id="ico" />
            Optimize
          </NavItem>
        </Link>
        <Link to="/uninstaller">
          <NavItem>
            <FaAppStoreIos id="ico" />
            Uninstaller
          </NavItem>
        </Link>
        <Link to="/clean">
          <NavItem>
            <BsTrash2Fill id="ico" /> Clean
          </NavItem>
        </Link>
        <Link to="/trim">
          <NavItem>
            <FaBuromobelexperte id="ico" />
            Trim
          </NavItem>
        </Link>
        <NavHeader>Hardware</NavHeader>
        <Link to="/storage">
          <NavItem>
            <MdStorage id="ico" />
            Storage
          </NavItem>
        </Link>
        <Link to="/graphics">
          <NavItem>
            <FiCpu id="ico" />
            Graphics
          </NavItem>
        </Link>
        <Link to="/battery">
          <NavItem>
            <BsBatteryCharging id="ico" />
            Battery
          </NavItem>
        </Link>
        <Link to="/cooling">
          <NavItem>
            <GrCloudlinux id="ico" />
            Cooling
          </NavItem>
        </Link>
      </Navlist>
      <Link to="/settings">
        <NavFooter className="footer" display={d}>
          <BsGearWideConnected id="ico" /> Settings
        </NavFooter>
      </Link>
    </Navside>
  );
}

export default Sidebar;
