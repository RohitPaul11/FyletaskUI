import React from "react";
import "./styles/company.css";
import heartImg from "./photo/heart.png";
import clockImg from "./photo/clock.png";
import path4402Img from "./photo/Path 4402.png";
import path4406Img from "./photo/Path 4406.png";

export default function Company() {
  return (
    <>
      <div className="com_container">
        <div className="content_area">
          <div className="h3_div">
            <h5>EXPERT GROWTHS</h5>
          </div>
          <div className="h1_div">
            <h1>OUR COMPANY GROWTH</h1>
          </div>

          <div className="content_div">
            <div className="card card1">
              <img src={heartImg} alt="Heart" />
              <h1>199+</h1>
              <p>Satisfied Customers</p>
            </div>
            <div className="card card2">
              <img src={clockImg} alt="Clock" />
              <h1>1591+</h1>
              <p>Days of Operation</p>
            </div>
            <div className="card card3">
              <img src={path4402Img} alt="Completed Projects" />
              <h1>283+</h1>
              <p>Completed Projects</p>
            </div>
            <div className="card card4">
              <img src={path4406Img} alt="Awards" />
              <h1>75+</h1>
              <p>Won Awards</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
