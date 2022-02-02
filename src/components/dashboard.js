import React from "react";
import "./dashboard.css";
import Saving from "../assests/Group 42.svg";
import Pension from "../assests/Group 41.svg";
import Credit from "../assests/Group 40.svg";
import Loan from "../assests/Group 43.svg";

function dashboard() {
  return (
    <div className="dashboard">
      <div className="first">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#fff",
            padding: "5rem",
            paddingBottom: "8rem",
          }}
        >
          <div style={{ width: "28rem" }}>
            <h1 className="dashboardheading">
              Experience convenience and Safety
            </h1>
            <p style={{ fontSize: "1.17rem" }}>
              Make secure payments from your home using Internet Banking &
              iMobile app
            </p>
            <button className="dashboardbtn">Login Now</button>
          </div>
        </div>
      </div>
      <div className="second">
        <div className="secondbox">
        <div>
          <img className="secondimg" src={Saving} alt="saving" />
          <h2 className="secondheading">Saving Account</h2>
          <hr className="secondline" />
          <p className="secondtext">
            A convenient sale and rewarding experience
          </p></div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button className="seconddashboardbtn">Apply Now</button>
          </div>
        </div>
        <div className="secondbox">
        <div>
          <img className="secondimg" src={Loan} alt="loan" />
          <h2 className="secondheading">Loans</h2>
          <hr className="secondline" />
    
            
              <p className="secondtext">
                One Step Solutions for all your Financial Needs
              </p></div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="seconddashboardbtn">Apply Now</button>
              </div>
            
        </div>

        <div className="secondbox"><div>
          <img className="secondimg" src={Credit} alt="Credit" />
          <h2 className="secondheading">Credit Card</h2>
          <hr className="secondline" />
        
              <p className="secondtext">A credit card for all your Needs</p></div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="seconddashboardbtn">Apply Now</button>
              
          </div>
        </div>

        <div className="secondbox">
        <div>
          <img className="secondimg" src={Pension} alt="Pension" />
          <h2 className="secondheading">National Pension System</h2>
          <hr className="secondline" />
          
              <p className="secondtext">
                Don't miss out on saving additional tax pf RS 15,600
              </p></div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="seconddashboardbtn">Apply Now</button>
          </div>
        </div>
      </div>
      <div className="third">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            color: "#000",
            paddingTop: "13rem",
            paddingBottom: "8rem",
            paddingRight: "5rem",
          }}
        >
          <div
            style={{
              width: "25rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <h1 className="dashboardheading">
              Experience convenience and Safety
            </h1>
            <p style={{ fontSize: "1.17rem" }}>
              Make secure payments from your home using Internet Banking &
              iMobile app
            </p>
            <button className="dashboardbtn">Invest Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboard;
