import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosCloseCircle, IoIosMenu, IoMdCart, IoIosLogIn, IoIosLogOut } from "react-icons/io";
import { FaUserCircle,FaArrowLeft  } from "react-icons/fa";
import { NavDropdown } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "./navbar.css";

const NewNavbar = () => {
  const [navbar, setNavbar] = useState("navbar");
  const [header, setHeader] = useState("header addBg");
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const navigate = useNavigate();

  const addBg = () => {
    if (window.scrollY >= 0) {
      setHeader("header addBg");
    }
  };

  const showNavbar = () => {
    setNavbar("navbar showNavbar");
  };

  const removeNavbar = () => {
    setNavbar("navbar");
  };

  const handleLogin = () => {
    setIsAuthenticated(true); 
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("user");
   
    navigate('/sign-in');

  };

  return (
    <>
      <div className={header}>
        
        <div className={navbar}>
          <ul className="menu">
            <li onClick={removeNavbar} className="listItem">
              <Link to="/" className="link">
                Time Tunnel
              </Link>
            </li>
            <li onClick={removeNavbar} className="listItem">
              <Link to="/our-team" className="link">
                About Us
              </Link>
            </li>
            <li onClick={removeNavbar} className="listItem">
              <Link to="/contact" className="link">
                Contact
              </Link>
            </li>
          </ul>

          <IoIosCloseCircle className="icon closeIcon" onClick={removeNavbar} />
        </div>

        <div className="signUp flex">
          {isAuthenticated ? (
            <>
              <NavDropdown
                className="textAction text"
                title={<FaUserCircle />}
                id="basic-nav-dropdown"
              >
                <Link
                  className="text textAction btn"
                  to="/profile/account-settings"
                >
                  Account Settings
                </Link>
                <Link
                  className="text textAction btn"
                  to="/profile/your-reservations"
                >
                  Your Reservations
                </Link>
                <button className="text textAction btn" onClick={handleLogout}>
                  <IoIosLogOut /> Sign Out
                </button>
              </NavDropdown>
            </>
          ) : (
            <>
              <Link className="text btn" to={"/sign-in"} onClick={handleLogin}>
                <IoIosLogIn /> Sign In
              </Link>
            </>
          )}
          <IoIosMenu className="icon toggleNavbarIcon" onClick={showNavbar} />
        </div>
      </div>
    </>
  );
};

export default NewNavbar;
