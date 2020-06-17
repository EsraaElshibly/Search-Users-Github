import React, { Component } from "react";
import "./About.css";
function About() {
  return (
    <div className="about">
      <div className="container">
        {/********* Some Inforrmaion *********/}
        <div className="info">
          <h2>microsoft student partener</h2>
          <p>
            Our team consists of agroup of students to help other student and
            produce courses and Services and events to others
          </p>
        </div>

        {/*********** Our Aims *********/}
        <div>
          <h3>our aim is helping you to raise up Your ...</h3>
        </div>

        <div className="parent">
          {/******** First Aim ********/}
          <div className="aims passion">
            <h4>Passion</h4>
            <p>
              Magnis madipsae que lip voloratati andigen daepeditem quiate re
              porem aut labor.Laceaque quiae sitiorem rest non restibusaes maio
              es dem tumquam core posae volor remped modis volor.
            </p>
          </div>

          {/******** Second Aim ********/}
          <div className="aims Creativity">
            <h4>Creativity</h4>
            <p>
              Magnis madipsae que lip voloratati andigen daepeditem quiate re
              porem aut labor.Laceaque quiae sitiorem rest non restibusaes maio
              es dem tumquam core posae volor remped modis volor.
            </p>
          </div>

          {/******** Third Aim ********/}
          <div className="aims Quality">
            <h4>Quality</h4>
            <p>
              Magnis madipsae que lip voloratati andigen daepeditem quiate re
              porem aut labor.Laceaque quiae sitiorem rest non restibusaes maio
              es dem tumquam core posae volor remped modis volor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
