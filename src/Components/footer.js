import React, { Component } from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="parent">
          {/*************** Form ************/}
          <div className="sec form">
            <input type="email" placeholder="Enter Your e-mail" />
            <input className="but" type="submit" value="send" />
          </div>

          {/*************** Links of pages ************/}
          <div className="sec links">
            <a href="www.facebook.com" target="_blank">
              facebook
            </a>
            <a href="www.twitter.com" target="_blank">
              twitter
            </a>
            <a href="www.instagram.com" target="_blank">
              instagram
            </a>
            <a href="www.youtube.com" target="_blank">
              youtube
            </a>
          </div>

          {/*************** copyRight @ ************/}
          <div className="sec copyRight">
            &copy;2011-2020 MSP.All right recived
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
