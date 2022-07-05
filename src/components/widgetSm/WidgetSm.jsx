import React from "react";
import "./widgetsm.css";
import { Visibility } from "@mui/icons-material";

function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSm-title">New Join Members</span>
      <ul className="widgetSm-list">
        <li className="widgetSm-listItem">
          <img
            src={require("../../pics/user1.jpg")}
            alt=""
            className="widgetSm-img"
          />
          <div className="widgetSm-user">
            <span className="widgetSm-username">Tabitha Lunyolo</span>
            <span className="widgetSm-userTitle">Purchasing Clerk</span>
          </div>
          <button className="widgetSm-btn">
            <Visibility className="widgetSm-icon" />
            Display
          </button>
        </li>

        <li className="widgetSm-listItem">
          <img
            src={require("../../pics/user2.jpg")}
            alt=""
            className="widgetSm-img"
          />
          <div className="widgetSm-user">
            <span className="widgetSm-username">Felix Nyalenda</span>
            <span className="widgetSm-userTitle">Software Engineer</span>
          </div>
          <button className="widgetSm-btn">
            <Visibility className="widgetSm-icon" />
            Display
          </button>
        </li>

        <li className="widgetSm-listItem">
          <img
            src={require("../../pics/user3.jpg")}
            alt=""
            className="widgetSm-img"
          />
          <div className="widgetSm-user">
            <span className="widgetSm-username">Fredrick Awino</span>
            <span className="widgetSm-userTitle">Sales Executive</span>
          </div>
          <button className="widgetSm-btn">
            <Visibility className="widgetSm-icon" />
            Display
          </button>
        </li>

        <li className="widgetSm-listItem">
          <img
            src={require("../../pics/user4.jpg")}
            alt=""
            className="widgetSm-img"
          />
          <div className="widgetSm-user">
            <span className="widgetSm-username">Imelda Adhiambo</span>
            <span className="widgetSm-userTitle">Human Resource Manager</span>
          </div>
          <button className="widgetSm-btn">
            <Visibility className="widgetSm-icon" />
            Display
          </button>
        </li>

        <li className="widgetSm-listItem">
          <img
            src={require("../../pics/user5.jpg")}
            alt=""
            className="widgetSm-img"
          />
          <div className="widgetSm-user">
            <span className="widgetSm-username">Widmark Olali</span>
            <span className="widgetSm-userTitle">Board Chairman</span>
          </div>
          <button className="widgetSm-btn">
            <Visibility className="widgetSm-icon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSm;
