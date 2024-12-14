import { useState } from "react";
import { useNavigate } from "react-router-dom";
import getUser from "../api/get-user.js";
import postLogin from "../api/post-login.js";
import{ useAuth } from "../hooks/use-auth.js";

function LoginForm() {
    const navigate = useNavigate();
    const { auth, setAuth } = useAuth();

    const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    });
    


    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };
 
    const handleSubmit = (event) => { 
        event.preventDefault(); 
        if (credentials.username && credentials.password) { 
            postLogin(credentials.username, credentials.password).then((response) => { 
                // console.log(response); // Log the response to see its structure 
                window.localStorage.setItem("token", response.token); 
                window.localStorage.setItem("user_id", response.user_id); 
                window.localStorage.setItem("email", response.email); 
                // add band
                setAuth({ 
                    token: response.token, 
                    user_id: response.user_id, 
                    email: response.email, 
                }); navigate("/"); 
            }).catch((error) => { 
                console.error('Login failed:', error); }); } };


    return (
      <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                placeholder="Enter username"
                required
                onChange={handleChange}
            />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                placeholder="Password"
                required
                onChange={handleChange}
            />
        </div>
        <button type="submit" className="submit">
            Login
        </button>
      </form>
      </div>
    );
  }
  
  export default LoginForm;