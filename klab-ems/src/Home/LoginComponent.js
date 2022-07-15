
 import './loginComp.css';
// import avatar from "../images/avatar.png";
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function LoginComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    let navigate = useNavigate();

  const LoginComponent = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/login", {
        email,
        password,
      })
      .then((response) => {
        console.log("response", response);
        localStorage.setItem(
          "userData",
          JSON.stringify({
            userLoggedIn: true,
            token: response.data.access_token,
          })
        );
        setError("");
        setEmail("");
        setPassword("");
        // setLogoutUser(false);
        navigate("/nav");

        Swal.fire({
            icon: 'success',
            title: 'Logged in!',
            text: `user ${email} logged in successfully.`,
            showConfirmButton: false,
            timer: 2000
        });
      })
      .catch((error) => setError(error.message));
  };
   
    
  
   
    return ( 
       
       <center>
      <div className="klab-login">
          {/* <div> <img src={avatar} alt="avatar" id="logo"/></div> */}
          <h2 id="animateHeading">Hey!! Welcome on K-lab EMS!! Login here please!!</h2>
          <div>
          <form onSubmit={LoginComponent}method="post" className="klab-login_form" name="loginAdmin" id="loginForm">
          {error && <p style={{ color: "red" }}>{error}</p>}
          <input className="klab-input"
          id="email"
          type="email" placeholder="Enter your email" 
          name="email"
         value={email}
         onChange={e => setEmail(e.target.value)} requared/>
          <input className="klab-input" id="password" type="password" placeholder="Enter yourpassword" 
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          requared/>
          <button className="klab-button">Login</button>
          <p>Don't have an Account? <a href="#"> Sign up now </a></p>
               </form>
          </div>
      </div>  
      </center> 
    );
    
   
   
   
}
 
export default LoginComponent;