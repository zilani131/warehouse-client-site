import React from "react";
import "./Footer.css";

import googlemap from "../Utilities/Logo/googlemap.webp";
// hero icon
import { MapIcon,MailOpenIcon,UserIcon,PhoneIcon } from '@heroicons/react/outline'
const Footer = () => {
  return (
    // footer container
    <div className="footerContainer">
      {/* google map */}
      <div className="mapContainer">
        <img className="mapImg" src={googlemap} alt="" />
      </div>
      {/* footer content */}
      <div className="rightSideContainer">
        <div className="my-3">
          <div>
       
            <h2 className="text-center">CONTACT INFORMATION</h2>
          </div>
          <div className="right-side-form w-100 d-flex  flex-md-row align-items-sm-center justify-content-sm-center  ">
            <div className="ms-5 mx-2">
              <div className="text-wrap text-start">
                <MapIcon style={{ width: "30px" }} /> Agrabad, Chittagong
              </div>
              <div className=" text-start">
                <PhoneIcon style={{ width: "30px" }} /> 017XXXXXXX
              </div>
              <div className=" text-start">
                <MailOpenIcon style={{ width: "30px" }} /> zilani@mail.com
              </div>
            </div>
            <form className="my-5 mx-2">
              <span className="d-block my-2">
                <UserIcon style={{ width: "30px" }} />{" "}
                <input
                  className="footerInputField"
                  placeholder="First Name"
                  type="text"
                  name=""
                  id=""
                />
              </span>
              <span className="d-block my-2">
                <MailOpenIcon style={{ width: "30px" }} />{" "}
                <input
                  className="footerInputField"
                  placeholder="Email"
                  type="text"
                  name=""
                  id=""
                />
              </span>
              <span className="d-block my-2">
                <PhoneIcon style={{ width: "30px" }} />{" "}
                <input
                  className="footerInputField"
                  placeholder="Phone"
                  type="tel"
                  name=""
                  id=""
                />
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
