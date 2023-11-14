import React from "react";
import "../CSS/Signup.css";
import {  } from "react-router-dom";
import Home from "./Home";

const Signup = () => {
  function handleSubmit(){
    alert("Arriving Soon!");
  }
  return (
    <>
      <div class="signin-container">
        <div class="signin-box">
          <h2>Sign in</h2>
          <form action="#" method="POST">
            <div class="input-box2">
              <input type="text" name="name" id="name" required />
              <label for="name">Name</label>
            </div>
            <div class="input-box2">
              <input type="email" name="email" id="email" required />
              <label for="email">Email</label>
            </div>
            <div class="input-box2">
              <input type="password" name="password" id="password" required />
              <label for="password">Password</label>
            </div>
            <div class="input-box2">
              <input type="text" name="usn" id="usn" required />
              <label for="usn">USN</label>
            </div>
            <div class="input-box2">
              <select name="scheme" id="scheme">
                <option value="" disabled selected>
                  Select Scheme
                </option>
                <option value="scheme1">2022</option>
                <option value="scheme2">2021</option>
                <option value="scheme3">2018</option>
              </select>
              <label for="scheme"></label>
            </div>
            <div class="input-box2">
              <select name="branch" id="branch">
                <option value="" disabled selected>
                  Select Branch
                </option>
                <option value="branch1">CSE</option>
                <option value="branch2">EC</option>
                <option value="branch3">ME</option>
                <option value="branch4">CV</option>
              </select>
              <label for="branch"></label>
            </div>
            <button type="submit" onClick={handleSubmit} class="signin-btn">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
