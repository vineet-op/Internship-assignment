import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: "spring", duration: 5 };
  return (
    <div className="Hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: "400px" }}
            whileInView={{ left: "10px" }}
            transition={transition}
          ></motion.div>
          <span> The Best fitness club in the town </span>
        </div>

        {/* Hero Heading */}

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>In here we will help you to get in your Dream Physic</span>
          </div>
        </div>

        {/*Figurs */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter start={100} end={140} delay={1} preFix="+" />
            </span>
            <span>Expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter start={950} end={1000} delay={1} preFix="+" />
            </span>
            <span>Memebesr join</span>
          </div>
          <div>
            <span>
              <NumberCounter start={15} end={50} delay={1} preFix="+" />
            </span>
            <span>fitness Program</span>
          </div>
        </div>

        {/*Hero buttons  */}
        <div className="hero-buttons">
          <button className="btn">Get started</button>
          <button className="btn">learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "3rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span> 120 bpm</span>
        </motion.div>

        {/* hero images */}

        <img src={hero_image} className="hero-image" alt="images"></img>
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "21rem" }}
          transition={transition}
          src={hero_image_back}
          className="hero_image_back"
          alt="images"
        ></motion.img>

        {/* Calories */}

        <motion.div
          className="calorie"
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
        >
          <img src={Calories} alt="calorie images" />
          <div>
            <span>Calories Burned </span>
            <span>250kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
