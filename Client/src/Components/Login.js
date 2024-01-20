import React, { useState } from "react";
import "../CSS/Login.css";

import {Link, redirect} from "react-router-dom";


const Login = () => {
  const [formData, setFormData] = useState({
    email:'',
    password:''
  })
  const handleChange = (e) => {
    const {name, value} =e.target
    setFormData({ 
        ...formData,
        [name]: value
    })
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData)
    const endpoint = process.env.REACT_APP_LOGIN_END_POINT
    const response = await fetch(endpoint,{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        email:formData.email, 
        password:formData.password
      })
    })
    const data = await response.json()
    console.log(data)
    if (data.success) {
      if(!localStorage.getItem('token')){
        localStorage.setItem('token', data.data.token)
			  alert('Login successful')
      }
			window.location.href = '/Dashboard'
		} else {
			alert('Please check your username and password')
		}
  }
  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <h2>Log in</h2>
          <form action="#" method="POST">
            <div className="input-box">
              <input type="email" name="email" id="email" onChange={handleChange}  required />
              <label for="email">Email</label>
            </div>
            <div className="input-box">
              <input type="password" name="password" id="password" onChange={handleChange} required />
              <label for="password">Password</label>
            </div>
            <button type="submit" onClick={handleSubmit} className="login-btn">
              Login
            </button>
            <div className="links">
            <Link to="/">Forgot Password? &nbsp; &nbsp;</Link>
            <Link to="/Signup" class="sign">Create account</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
