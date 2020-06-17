import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contactUs">
        <div className="container">
          <div className="ques">
            <h2>Want To Work With Us?</h2>
          </div>

          <div className="form">
            <h4>Please Fill This Form</h4>
            <form>
              {/******** name & Pass & e-mail *******/}
              <input type="text" placeholder="Enter Youe Name" />
              <input type="e-mail" placeholder="Enter Youe E-mail" />
              <input type="password" placeholder="Enter Youe Password" />

              {/********** Select his / her Commity ***********/}
              <select>
                <option value="web">Web</option>
                <option value="Mobile Application">Mobile Application</option>
                <option value="geeks">Geeks</option>
                <option value="media">Media</option>
                <option value="logistic">Logistic</option>
              </select>
              <button>send</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
