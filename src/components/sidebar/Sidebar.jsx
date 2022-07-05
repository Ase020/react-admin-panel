import React from "react";
import "./sidebar.css";

import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <Link to="/" className="link">
              <li className="sidebar-listItem active">
                <LineStyle className="sidebar-icon" />
                Home
              </li>
            </Link>
            <li className="sidebar-listItem">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-listItem">
              <TrendingUp className="sidebar-icon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebar-menu">
          <h3 className="sidebar-title">Quick Menu</h3>
          <ul className="sidebar-list">
            <Link to="/users" className="link">
              <li className="sidebar-listItem active">
                <PermIdentity className="sidebar-icon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebar-listItem">
                <Storefront className="sidebar-icon" />
                Products
              </li>
            </Link>
            <li className="sidebar-listItem">
              <AttachMoney className="sidebar-icon" />
              Transactions
            </li>
            <li className="sidebar-listItem">
              <BarChart className="sidebar-icon" />
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebar-menu">
          <h3 className="sidebar-title">Notification</h3>
          <ul className="sidebar-list">
            <li className="sidebar-listItem active">
              <MailOutline className="sidebar-icon" />
              Mail
            </li>
            <li className="sidebar-listItem">
              <DynamicFeed className="sidebar-icon" />
              Feedback
            </li>
            <li className="sidebar-listItem">
              <ChatBubbleOutline className="sidebar-icon" />
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebar-menu">
          <h3 className="sidebar-title">Staff</h3>
          <ul className="sidebar-list">
            <li className="sidebar-listItem active">
              <WorkOutline className="sidebar-icon" />
              Manage
            </li>
            <li className="sidebar-listItem">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-listItem">
              <Report className="sidebar-icon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
