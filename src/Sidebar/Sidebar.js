import React, { useState } from "react";
import classes from "./sidebar.module.css";
import noti from "../Icon/notification.svg";
import pay from "../Icon/pay.svg";
import fee from "../Icon/fee.svg";
import student from "../Icon/student.svg";
import dash from "../Icon/dash.svg";
import staff from "../Icon/staffdetails.svg";
import left from "../Icon/leftangle.svg";
import profile from "../Icon/profile.svg";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const dropdownHandler = () => {
    setSidebar(true);
  };
  const closedropdownHandler = () => {
    setSidebar(false);
  };

  return (
    <div>
      <div className={classes.sidebar}>
        <div className={classes.sidebar_heading}>
          <img src={profile} alt="dash" />
          <p>Edit Profile</p>
        </div>

        <nav>
          <ul>
            <li>
              <img src={dash} alt="dash" />
              <a href="https://www.google.co.in/" target="blank" >Dash Board</a>
            </li>
            <li>
              <img src={fee} alt="dash" />
              <a href="https://www.google.co.in/" target="blank" >Fee details</a>
            </li>

            <li>
              <img src={staff} alt="dash" />
              <a href="https://www.google.co.in/" target="blank" onClick={dropdownHandler}>
                Staff Details
              </a>
              {sidebar ? (
                <ul className={classes.dropdown}>
                  <li>
                    <a href="https://www.google.co.in/" target="blank">View details</a>
                  </li>
                  <li>
                    <a href="https://www.google.co.in/"  target="blank">Pay History</a>
                  </li>
                  <li>
                    <a href="https://www.google.co.in/" target="blank" >Add Staff</a>
                  </li>
                </ul>
              ) : null}
            </li>
            <li>
              <img src={student} alt="dash" />
              <a href="https://www.google.co.in/" target="blank">Student Details</a>
            </li>
            <li>
              <img src={pay} alt="dash" />
              <a href="https://www.google.co.in/" target="blank" >Pay salary</a>
            </li>
            <li>
              <img src={noti} alt="dash" />
              <a href="https://www.google.co.in/" target="blank">Notices</a>
            </li>
            <li>
              <img src={profile} alt="dash" />
              <a href="https://www.google.co.in/" target="blank" >School Profile</a>
            </li>
          </ul>
        </nav>
        <div className={classes.button}>
          <button className={classes.logout}>Log out</button>
        </div>
      </div>
      <div>
        <div className={classes.tag}>
          <img
            onClick={closedropdownHandler}
            className={classes.icon3}
            src={left}
            alt="leftangle "
          />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
