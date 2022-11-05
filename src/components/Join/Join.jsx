import React from "react";
import { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Join = () => {
  const [Email, setEmail] = useState("");
  const handleSubmit = (event) => {
    console.log("handleSubmit");
    event.preventDefault(); //  prevent page refresh
    // clear all input values in the form
    setEmail("");
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vx7i39i",
        "template_z8vcnmp",
        form.current,
        "-sZ-PRmKa7otWw8PO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text"> WITH US</span>
        </div>
      </div>

      <div className="right-j">
        <form
          ref={form}
          className="email-container"
          onSubmit={(sendEmail, handleSubmit)}
        >
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email"
            onChange={(event) => setEmail(event.target.value)}
            value={Email}
          />
          <button className="btn btn-j" type="submit">
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
