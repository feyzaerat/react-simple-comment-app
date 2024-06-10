import React from "react";
import "./sidebar.css";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="sidebar">
      <div className="logoContainer">
        <Link to="/" className="link">
          <img
            src="https://demo.feyzaerat.com.tr/fkeo-logo-light.png"
            alt="fke-logo"
            className="logo"
          />
          Task Manager
        </Link>
      </div>
      <div className="profileContainer">
        <FaUser />
        <p>Feyza Erat</p>
      </div>
      <div className="routerContainer">
        <NavLink to="/dashboard" className="link sidebarLink" >
          Home
        </NavLink>
        <NavLink to="/tasks" className="link sidebarLink">
          My Tasks
        </NavLink>
        <NavLink to="/settings" className="link sidebarLink">
          Settings
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
