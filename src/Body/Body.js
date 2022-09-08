import React from "react";
import classes from "./body.module.css";
import Search from "../Icon/Search.svg";
import Edit from "../Icon/Edit.svg";
import profile from "../Icon/profile.svg";
import Sidebar from "../Sidebar/Sidebar";
import angle from "../Icon/angle.svg";


const Body = () => {
  const details = ["Build number", "City", "Date Of Birth"];
  const location = ["Street", "Pincode", "Date Of Joining"];
  const bank = ["Salary Amount", "Bank Name", "Account Number"];
  const code = ["IFSC Code", "Branch Name"];

  return (
    <div className={classes.main}>
      <div className={classes.side}>
        <div>
          <Sidebar />
        </div>
      </div>
      
      <div className={classes.mainbody}>
        <div className={classes.body}>
          <div>
            <input
              className={classes.input}
              type="text"
              placeholder="Search Staff"
            />
          </div>
          <div className={classes.img}>
            <img className={classes.icon} src={Search} alt="search" />
          </div>
        </div>
        <div className={classes.filter}>
          <div className={classes.filtername}>
            <div className={classes.sort}>
              <p>Sort By</p>
              <img className={classes.icon} src={angle} alt="angle " />
            </div>
            <div className={classes.design}>
              <p>Designation</p>
              <img className={classes.icon} src={angle} alt="angle" />
            </div>
          </div>
          <div className={classes.add}>
            <span className={classes.addbox}>+ Add </span>
            <p>Staff</p>
          </div>
        </div>

        <div className={classes.details}>
          <div className={classes.fullname}>
            <div className={classes.border}></div>
            <div className={classes.fulldesig}>
              <div className={classes.name}>
                <p>Full Name</p>
              </div>
              <div className={classes.designation}>
                <p>Designation</p>
              </div>
            </div>
          </div>
          <div className={classes.editprofile}>
            <div className={classes.profile}>
              <img className={classes.icon} src={profile} alt="profile" />
              <p>View Profile</p>
            </div>
            <div className={classes.edit}>
              <img className={classes.icon2} src={Edit} alt="edit" />
              <p>Edit</p>
            </div>
          </div>
        </div>
        <div>
          <div className={classes.lastbox}>
            <div className={classes.lastlastbox}>
              <div className={classes.lastfull}>
                <div className={classes.profilepicture}>
                  <p>
                    Profile <br></br>Picture
                  </p>
                </div>
                <div className={classes.lastfullname}>
                  <div className={classes.full}>
                    <p>Full Name</p>
                  </div>
                  <div className={classes.lastdesign}>
                    <p>Designation</p>
                  </div>
                </div>
              </div>
              <div className={classes.lastprofile}>
                <div className={classes.lastviewprofile}>
                  <img className={classes.icon} src={profile} alt="profile" />

                  <p>View Profile</p>
                </div>

                <div className={classes.lastedit}>
                  <img className={classes.icon2} src={Edit} alt="edit" />

                  <p>Edit</p>
                </div>
              </div>
            </div>
            <div className={classes.person}>
              <h4>Personal Deatails</h4>
            </div>

            <div className={classes.studentdetails}>
              <div className={classes.personalcircle}></div>

              <div className={classes.deta}>
                <div>
                  {details.map((item) => (
                    <ul className={classes.details_border}>{item}</ul>
                  ))}
                </div>

                <div>
                  {location.map((item) => (
                    <ul className={classes.location}>{item}</ul>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className={classes.person}>
                <h4>Bank Details</h4>
              </div>

              <div className={classes.bank}>
                <div>
                  {bank.map((item) => (
                    <ul className={classes.bank_details}>{item}</ul>
                  ))}
                </div>
                <div className={classes.code_details}>
                  {code.map((item) => (
                    <ul className={classes.code}>{item}</ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={classes.button}>
            <button className={classes.reset}>Reset</button>
            <button className={classes.save}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;
