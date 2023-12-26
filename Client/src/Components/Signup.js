  import React, { useState } from "react";
  import "../CSS/Signup.css";
  import {} from "react-router-dom";
  import Home from "./Home";

  const Signup = () => {
    
    const [formData, setFormData] = useState({
      name : '',
      email: '',
      usn: '',
      password:'',
      scheme : Number ,
      branch : ''
    });

    const [errors, SetErrors] = useState({})

    const handleChange = (e) => {
      const {name, value} =e.target
      setFormData({ 
          ...formData,
          [name]: name === 'scheme' ? parseInt(value, 10) : value
      })
    }
    const handleSubmit =  async(e) =>{
      e.preventDefault();
      const validationErrors = {};
      if(!formData.name){
        validationErrors.name="Name is required.";
      }
      if(!formData.email){
        validationErrors.email="Email is required.";
      }
      else if(!(/\S+@\S+\.\S+/.test(formData.email))) {
        validationErrors.email = 'Email address is invalid.'
      }
      if(!formData.usn){
        validationErrors.usn='USN is required';
      }
      else if(!(/^\d[A-Z]{2}\d{2}[A-Z]{2}\d{3}$/.test(formData.usn) )){
        validationErrors.usn= 'Invalid USN format'
      }
      if(!formData.password){
        validationErrors.password='Password is required.'
      }
      if(!formData.branch){
        validationErrors.branch = 'Branch is required'
      }
      if(!formData.scheme){
        validationErrors.usn = 'Scheme is required'
      }
      SetErrors(validationErrors);
      if(Object.keys(validationErrors)===0){
        alert("Form Submitted successfully");
      }
      console.log(formData);
      const temp = JSON.stringify({formData})
      console.log(temp)
      // https://vernos-calcgpa.onrender.com/api/registerUser
      // const response = await fetch('http://localhost:4552/api/registerUser',{
      //       method: 'POST',
      //       headers:{
      //           'Content-Type':'application/json'
      //       },
      //       body: JSON.stringify({
      //           formData,
      //       })
      //   })
      //   const data = await response.json()
      //   console.log(data)
    }
    return (
      <>
        <div class="signin-container">
          <div class="signin-box">
            <h2>Sign in</h2>
            <form onSubmit={handleSubmit}>
              <div class="input-box2">
                <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      onChange={handleChange}
                      />
                <label for="name">Name</label>
                {errors.name && <span className="error-msg">{errors.name}</span>}
              </div>

              <div class="input-box2">
                <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      onChange={handleChange} />
                <label for="email">Email</label>
                {errors.name && <span className="error-msg">{errors.name}</span>}
              </div>
              <div class="input-box2">
                <input 
                      type="text" 
                      name="usn" 
                      id="usn" 
                      onChange={handleChange} />
                <label for="usn">USN</label>
                {errors.usn && <span className="error-msg">{errors.usn}</span>}
              </div>
              
              <div class="input-box2">
                <select name="scheme" id="scheme" onChange={handleChange}>
                  <option value="" disabled selected>
                    Select Scheme
                  </option>
                  <option value={2022}>2022</option>
                  <option value={2021}>2021</option>
                  <option value={2018}>2018</option>
                </select>
                <label for="scheme"></label>
                {errors.scheme && <span className="error-msg">{errors.scheme}</span>}
              </div>
              <div class="input-box2">
                <select name="branch" id="branch" onChange={handleChange}>
                  <option value="" disabled selected>
                    Select Branch
                  </option>
                  <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                  <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                  <option value="Mechnaical Engineering">Mechnaical Engineering</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                </select>
                <label for="branch"></label>
                {errors.branch && <span className="error-msg">{errors.branch}</span>}
              </div>
              <div class="input-box2">
                <input 
                      type="password" 
                      name="password" 
                      id="password" 
                      onChange={handleChange} />
                <label for="password">Password</label>
                {errors.password && <span className="error-msg">{errors.password}</span>}
              </div>
              <button type="submit" class="signin-btn">
                Register
              </button>
            </form>
          </div>
        </div>
      </>
    );
  };

  export default Signup;
