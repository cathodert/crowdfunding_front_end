import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postSignup from "../api/post-signup.js";
// import z from "zod";
import postLogin from "../api/post-login.js";
import "./Form.css"
// import Dropdown from "./UserDropdown.jsx";

// const signupSchema = z.object({
//   username: z
//     .string()
//     .min(5, { message: "Username must not be empty" }),
//   password: z
//     .string()
//     .min(8, { message: "Password must be at least 8 characters long" }),
//   email: z.string().email({ message: "Email must not be empty" }),
//   user_type:z.string().length(2, { message: "Supporter must not be empty" }),
// });

function SignupForm() {
  // const [selectedValue, setSelectedValue] = useState(''); 
  // const handleSelect = (value) => { setSelectedValue(value); };

  const navigate = useNavigate();
  const [inputs, setInputs, selectedValue, setSelectedValue] = useState({
    first_name: '',
    last_name: '',      
    username: '',
    password: '',
    email: '',
    user_type: '',
  });
  const handleSelect = (value) => { setSelectedValue(value); };    

  const handleChange = (event) => {
    // console.log(event.target.name) 
    const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
  };
    
    const handleSubmit= async (event) => {
      event.preventDefault();
      // const result = signupSchema.safeParse(inputs);
      // if (!result.success) {
      //   const error = result.error.errors?.[0];
      //   if (error) {
      //     alert(error.message);
      //   }
      try {
          const result = await postSignup(inputs);
          console.log("Success:", result);
          navigate("/")
      }   catch (error) {
          console.error("Signup failed:", error)
      
    
      // console.log(inputs)    
      }}
    

      return (
    <div className="login-form">
    <form>
    <div className="fieldset">
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
              required
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
              required
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
              required
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
              required
              onChange={handleChange}
          />
          {/* <Dropdown onSelect={handleSelect}
            /> */}

      </div>
      <button type="submit" onClick={handleSubmit}>
          Sign up
      </button>
      </div>
    </form>
    </div>
  );
  }
  
  export default SignupForm;