// import LoginForm from "../components/LoginForm";

// function LoginPage() {
//     return <LoginForm />;
//   }
  
//   export default LoginPage;

import React, { useState } from "react";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/FormLogin";
 
function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
 
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
 
  return (
    <div>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      {isLogin ? <LoginForm /> : <SignupForm />}
      <button onClick={toggleForm}>
        {isLogin ? "Switch to Sign Up" : "Switch to Login"}
      </button>
    </div>
  );
}
 
export default LoginPage;