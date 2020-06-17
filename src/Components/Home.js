import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        {/************ Show team image *************<div className="image">
          <img src = "../Pic/222.jpeg" />
        </div>/}
        

        {/************** Our Slogan *************/}
        <div className="design">
          <h2>make yourself motivated to start</h2>
          <p>
            create your online portfolio in minutes with profissionally and
            lovingly design reen tures
          </p>
          <button>Get Started</button>
        </div>

        {/************ Start Events *************/}
        <div className="text">
          <h2>our events</h2>
        </div>

        {/*********** Box that contain events **********/}
        <div className="allEvents">
          <div className="events firstEvent">
            <img src="../Pic/111.PNG" />
            <h4>Ex-Known Form</h4>
            <p>This Event For Raise your knowledge and experence</p>
          </div>
          <div className="events secondEvent">
            <img src="../Pic/111.PNG" />
            <h4>Ex-Known Form</h4>
            <p>This Event For Raise your knowledge and experence</p>
          </div>
          <div className="events thirdEvent">
            <img src="../Pic/111.PNG" />
            <h4>Ex-Known Form</h4>
            <p>This Event For Raise your knowledge and experence</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
