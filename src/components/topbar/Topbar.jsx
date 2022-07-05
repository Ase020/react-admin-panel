import React from "react";
import "./topbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="top-left">
          <Link to="/" className="link">
            <span className="logo">AseDevs</span>
          </Link>
        </div>
        <div className="top-right">
          <div className="topbar-icon-container">
            <NotificationsNoneIcon />
            <span className="top-icon-badge">2</span>
          </div>

          <div className="topbar-icon-container">
            <LanguageIcon />
            <span className="top-icon-badge">2</span>
          </div>

          <div className="topbar-icon-container">
            <SettingsIcon />
          </div>
          <img
            src={require("../../pics/DSCN3716.JPG")}
            alt=""
            className="top-avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
