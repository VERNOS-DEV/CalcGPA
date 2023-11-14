import React from "react";
import "../CSS/Login.css";

import {Link, redirect} from "react-router-dom";
function handleSubmit (){
  redirect("/");
  alert("Arriving Soon!");
}
const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <h2>Log in</h2>
          <form action="#" method="POST">
            <div className="input-box">
              <input type="email" name="email" id="email" required />
              <label for="email">Email</label>
            </div>
            <div className="input-box">
              <input type="password" name="password" id="password" required />
              <label for="password">Password</label>
            </div>
            <button type="submit" onClick={handleSubmit} className="login-btn">
              Login
            </button>
            <div className="links">
              <Link to="#">Forgot Password?</Link>
              <span>&nbsp;&nbsp;</span>
              <Link to="/Signup">Create account</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
