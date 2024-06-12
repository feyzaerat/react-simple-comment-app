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
    localStorage.removeItem('token');
    navigate('/sign-in');

  };

  return (
    <>
      <div className={header}>
        
        <div className={navbar}>
          <ul className="menu">
            <li onClick={removeNavbar} className="listItem">
              <Link to="/" className="link">
                All Tasks
              </Link>
            </li>
         
            
          </ul>

          <IoIosCloseCircle className="icon closeIcon" onClick={removeNavbar} />
        </div>

        <div className="signUp flex">
          {isAuthenticated ? (
            <>
              <NavDropdown
                className="drop-down-dark text"
                title={<FaUserCircle />}
                id="basic-nav-dropdown"
              >
                <Link
                  className="text btn drop-down-dark-link"
                  to="/profile/account-settings"
                >
                  Settings
                </Link>
                <Link
                  className="text btn drop-down-dark-link"
                  to="/profile/your-reservations"
                >
                  Profile
                </Link>
                <Link to="#" className="text btn drop-down-dark-link" onClick={handleLogout}>
                   Sign Out
                </Link>
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
