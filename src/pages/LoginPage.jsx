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
    title: "Login or Sign up to bandtogethr"
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
      <button onClick={toggleForm}>
        {isLogin ? "Switch to Sign Up" : "Switch to Login"}
      </button>
    </div>
    </div>
  );
}
 
export default LoginPage;