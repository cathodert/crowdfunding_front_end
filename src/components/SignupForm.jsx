import { useState } from "react";
import { useNavigate } from "react-router-dom";

import postSignup from "../api/post-signup.js";

function SignupForm() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
      first_name: '',
      last_name: '',      
      username: '',
      password: '',
      email: '',
      user_type: '',
    });
        
    const handleChange = (event) => {
      console.log(event.target.name) 
      const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    };

    const handleSubmit= async (event) => {
        event.preventDefault();
        try {
            const result = await postSignup(inputs);
            console.log("Success:", result);
            navigate("/")
        }   catch (error) {
            console.error("Signup failed:", error)
        }
        }
        console.log(inputs)
    return (
      <form>
        <div>
          <label htmlFor="first_name">First name:</label>
            <input
                type="text"
                name="first_name"
                placeholder="Enter first name"
                value={inputs.first_name}
                onChange={handleChange}
            />
        </div>
        <div>
          <label htmlFor="last_name">Last name:</label>
            <input
                type="text"
                name="last_name"
                placeholder="Enter last name"
                value={inputs.last_name}
                onChange={handleChange}
            />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
            <input
                type="text"
                name="username"
                placeholder="Create a username"
                value={inputs.username}
                onChange={handleChange}
            />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
            <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={inputs.password}
                onChange={handleChange}
            />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
            <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={inputs.email}
                onChange={handleChange}
            />
        </div>
        <div>
          <label htmlFor="user_type">User type</label>
            <input
                type="text"
                name="user_type"
                placeholder="SU (supporter) or BM (band)"
                value={inputs.user_type}
                onChange={handleChange}
            />
        </div>
        <button type="submit" onClick={handleSubmit}>
            Sign up
        </button>
      </form>
    );
  }
  
  export default SignupForm;