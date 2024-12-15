import React, { useState } from "react";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/FormLogin";
import HeroSection from "../components/Hero";
import HeroImage from "../img/hero-blue.png"
import "./Pages.css"
import "../components/Form.css"
 
function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const homeText = {
    title: "Login or Sign Up"
  }
 
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
 
  return (
    <div className="main-page">
      <div>
            <HeroSection backgroundImage={HeroImage} textContent={homeText}/>
      </div>
      <div className="fieldset"> 
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      {isLogin ? <LoginForm /> : <SignupForm />}
      <button className="button" onClick={toggleForm}>
        {isLogin ? "Not already a member? Sign Up" : "Back to Login"}
      </button>
    </div>
    </div>
  );
}
 
export default LoginPage;