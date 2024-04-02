import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";
const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/* header */}
      <div className="programs-header">
        <span className="stroke-text">Explore</span>
        <span>Our Program</span>
        <span className="stroke-text">To shape you</span>
      </div>

      <div className="program-categories">
        {programsData.map((program) => {
          return (
            <div className="category">
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
                <span>Join Now</span>
                <img src={RightArrow} alt="planes" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
