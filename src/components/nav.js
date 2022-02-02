import React from "react";
import "./nav.css";
import { AiFillLock, AiOutlineSearch } from "react-icons/ai";
import Ctbank from "../assests/Group 36.svg";

function nav() {
  return (
    <div className="nav">
      <div className="navtop">
        <img className="ct" src={Ctbank} alt="ctbank"/>
        <div className="navsecond">
        <div className="navsearch">
          <input className="navinput" placeholder="Search" />
          <AiOutlineSearch style={{fontSize: "1rem"}} />
        </div>
        <div className="logindiv">
          <button className="navbtn">
            <AiFillLock />
            LOGIN
          </button>
        </div>
        <button className="navbtn">NEW USER</button></div>
      </div>
      <div className="navtexts">
        <p className="navnavtexts">Personal Banking</p>
        <p className="navnavtexts">Products</p>
        <p className="navnavtexts">Apply Online</p>
        <p className="navnavtexts">Payment</p>
        <p className="navnavtexts">Ways to Bank</p>
        <p className="navnavtexts">Get in Touch</p>
      </div>
    </div>
  );
}

export default nav;
