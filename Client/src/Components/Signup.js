  import React, { useState, useEffect } from "react";
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
    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const [buttonText, setButtonText] = useState('Register');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    

    const handleChange = (e) => {
      const {name, value} =e.target
      setFormData({ 
          ...formData,
          [name]: name === 'scheme' ? parseInt(value, 10) : value
      })
    }
    useEffect(() => {
      if (msg) {
        console.log(msg); 
      }
    }, [msg]);

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
      // console.log(formData);
      const temp = JSON.stringify({formData})
      setLoading(true);
      
      const endpoint = process.env.REACT_APP_REGISTER_END_POINT

      const response = await fetch(endpoint,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name:formData.name,
                email:formData.email,
                usn: formData.usn,
                password: formData.password,
                branch: formData.branch,
                scheme: formData.scheme

            })
        })
        const data = await response.json()
        console.log(data);
        if(data){
           setLoading(false)
           if(data.message.code==407){
            validationErrors.email=data.message.msg1
            validationErrors.usn=data.message.msg2
            
           }
           if(data.message.code==406){
            validationErrors.usn=data.message.msg
           }
           if(data.message.code==405){
            validationErrors.email=data.message.msg
           }
           SetErrors(validationErrors)

           if(data.message.code==200){
            setButtonText(data.message.msg)
            setMsg(data.message.msg);
            setTimeout(() => {
            setIsButtonDisabled(false)
            setButtonText('Register')
            setMsg('');
            }, 8000);
          }
           
           
      }
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
                {errors.email && <span className="error-msg">{errors.email}</span>}
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
  
                <button type="submit" className="signin-btn" disabled={isButtonDisabled || loading}>
                    {loading ? <div className="loader"></div> : buttonText}
                </button>
            </form>
            {msg && <div className="response-message">{msg}</div>}
          </div>
          
        </div>
        
      </>
    );
  };

  export default Signup;


  {/* <div className="SignUp_msg_box_container">
            <div className="SignUp_msg_box"> 
              {msg && <p>{msg}</p>}
            </div>
       </div> */}