import React from 'react';
 import './loginComp.css';



const Register = () => {
   
    
  
   
    return ( 
       
       <center>
      <div className="klab-register">

          <h2 id="animateHeading">Hey...!! Welcome on K-lab EMS!! register here please!!</h2>
          <div>
          <form method="post" className="klab-login_form" name="loginAdmin" id="loginForm">
          <input className="klab-input"type="text" placeholder="Enter full name" requared/>
          <input className="klab-input"type="text" placeholder="Enter your department" requared/>
          <input className="klab-input"type="number" placeholder="Enter your phone number" requared/>
          <input className="klab-input"type="number" placeholder="Enter your ID number" requared/>
          <input className="klab-input"type="email" placeholder="Enter your email" requared/>
          <input className="klab-input"type="password" placeholder="Enter yourpassword" requared/>
          <button className="klab-button">Register</button>
          <p>Already  have an Account? <a href="#"> Login now </a></p>
               </form>
          </div>
      </div>  
      </center> 
    );
    
   
   
   
}
 
export default Register;