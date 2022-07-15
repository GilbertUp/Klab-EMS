import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import NavBar from "../Home/KNav";
function Loggin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        axios
          .post("http://localhost:8000/auth/login", {
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
            if (email === 'admin@email.com'){
                navigate("/dashboard");
            }
            else if(email==="employee@email.com"){
                navigate('/emp');
            }
           

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
return(
   
   

    
        <div className="small-container"
        style={{marginTop: "20vh"}}>
            <form onSubmit={login}>
                <h1>Login</h1>
               
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="email">password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
               
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Login" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        // onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
       
    );
}

export default Loggin