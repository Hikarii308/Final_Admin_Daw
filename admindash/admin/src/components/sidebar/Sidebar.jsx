import React, { useState, useEffect } from "react";
import "./sidebar.scss";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HomeIcon from "@mui/icons-material/Home";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import GroupIcon from "@mui/icons-material/Group";
import ListIcon from "@mui/icons-material/List";
//import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BorderColorIcon from "@mui/icons-material/BorderColor";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'active' : ''}`}>
        <div className="top">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">Edulink</span>
          </Link>
        </div>
        <hr />
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>
                <HomeIcon className="icon" />
                <span>Main</span>
              </li>
            </Link>

            <p className="title">LISTS</p>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <li>
                <PersonOutlineIcon className="icon" />
                <span>Users</span>
              </li>
            </Link>

            <p className="title">STUDENTS</p>
            <Link to="/students" style={{ textDecoration: "none" }}>
              <li>
                <ListIcon className="icon" />
                <span>Students List</span>
              </li>
            </Link>

            <Link to="/teams" style={{ textDecoration: "none" }}>
              <li>
                <GroupIcon className="icon" />
                <span>Teams</span>
              </li>
            </Link>
            <Link to="/applications" style={{ textDecoration: "none" }}>
              <li>
                <BorderColorIcon className="icon" />
                <span>Applications</span>
              </li>
            </Link>

            <p className="title">TEACHERS</p>
            <Link to="/teacher" style={{ textDecoration: "none" }}>
              <li>
                <ListIcon className="icon" />
                <span>Teacher List</span>
              </li>
            </Link>
            <Link to="/themes" style={{ textDecoration: "none" }}>
              <li>
                <BorderColorIcon className="icon" />
                <span>Themes</span>
              </li>
            </Link>

            <p className="title">MANAGEMENT</p>
            <Link to="/projects" style={{ textDecoration: "none" }}>
              <li>
                <WorkOutlineIcon className="icon" />
                <span>Projects</span>
              </li>
            </Link>

            <p className="title">ADMIN</p>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <li>
                <AccountCircleOutlinedIcon className="icon" />
                <span>Profile</span>
              </li>
            </Link>
            {/* <Link to="/calendar" style={{ textDecoration: "none" }}>
  <li>
    <CalendarMonthIcon className="icon" />
    <span>Calendar</span>
  </li>
</Link> */}
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>
                <ExitToAppIcon className="icon" />
                <span>Logout</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      {isSmallScreen && (
        <div className="toggle-icon" onClick={toggleSidebar}>
          <MenuIcon />
        </div>
      )}
      {isOpen && isSmallScreen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;
