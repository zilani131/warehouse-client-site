import React from "react";
import "./Footer.css";

import googlemap from "../Utilities/Logo/googlemap.png";
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
            <h4 className="text-center">GET INTO SHAPE</h4>
            <h2 className="text-center">CONTACT INFORMATION</h2>
          </div>
          <div className="w-100 d-flex  flex-md-row align-items-sm-center justify-content-sm-center  ">
            <div className="my-5 mx-2">
              <div className="text-wrap">
                <MapIcon style={{ width: "30px" }} /> Agrabad, Chittagong
              </div>
              <div>
                <PhoneIcon style={{ width: "30px" }} /> 017XXXXXXX
              </div>
              <div>
                <MailOpenIcon style={{ width: "30px" }} /> zilani@mail.com
              </div>
            </div>
            <div className="my-5 mx-2">
              <span className="d-block my-2">
                <UserIcon style={{ width: "30px" }} />{" "}
                <input
                  className="border-0"
                  placeholder="First Name"
                  type="text"
                  name=""
                  id=""
                />
              </span>
              <span className="d-block my-2">
                <MailOpenIcon style={{ width: "30px" }} />{" "}
                <input
                  className="border-0"
                  placeholder="Email"
                  type="text"
                  name=""
                  id=""
                />
              </span>
              <span className="d-block my-2">
                <PhoneIcon style={{ width: "30px" }} />{" "}
                <input
                  className="border-0"
                  placeholder="Phone"
                  type="tel"
                  name=""
                  id=""
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
