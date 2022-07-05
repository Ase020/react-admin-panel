import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./user.css";

function User() {
  return (
    <div className="user">
      <div className="userTitle-container">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAdd-btn">Create</button>
        </Link>
      </div>

      <div className="user-container">
        <div className="user-show">
          <div className="user-show-top">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShow-img"
            />
            <div className="userShow-topTitle">
              <span className="username">Anna Becker</span>
              <span className="userJobTitle">Software Engineer</span>
            </div>
          </div>
          <div className="user-show-bottom">
            <span className="userShow-title">Account details</span>
            <div className="userShow-info">
              <PermIdentity className="userShow-icon" />
              <span className="userShow-infoTitle">annabecker99</span>
            </div>
            <div className="userShow-info">
              <CalendarToday className="userShow-icon" />
              <span className="userShow-infoTitle">16.05.1996</span>
            </div>
            <span className="userShow-title">Contact details</span>
            <div className="userShow-info">
              <PhoneAndroid className="userShow-icon" />
              <span className="userShow-infoTitle">+254 712 023 035</span>
            </div>
            <div className="userShow-info">
              <MailOutline className="userShow-icon" />
              <span className="userShow-infoTitle">anna.becker@gmail.com</span>
            </div>
            <div className="userShow-info">
              <LocationSearching className="userShow-icon" />
              <span className="userShow-infoTitle">Nairobi | Kenya</span>
            </div>
          </div>
        </div>
        <div className="user-update">
          <span className="userUpdate-title">Edit</span>
          <form className="userUpdate-form">
            <div className="userUpdate-left">
              <div className="userUpdate-item">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annabecker99"
                  className="userUpdate-input"
                />
              </div>
              <div className="userUpdate-item">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="userUpdate-input"
                />
              </div>
              <div className="userUpdate-item">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+254 712 023 035"
                  className="userUpdate-input"
                />
              </div>
              <div className="userUpdate-item">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="anna.becker@gmail.com"
                  className="userUpdate-input"
                />
              </div>
              <div className="userUpdate-item">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Nairobi | Kenya"
                  className="userUpdate-input"
                />
              </div>
            </div>
            <div className="userUpdate-right">
              <div className="userUpdate-upload">
                <img
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="userUpdate-img"
                />
                <label htmlFor="file">
                  <Publish className="userUpdate-icon" />
                </label>
                <input
                  type="file"
                  name=""
                  id="file"
                  style={{ display: "none" }}
                />
              </div>
              <button className="userUpdate-btn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
