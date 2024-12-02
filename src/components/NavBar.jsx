import React, {useState} from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import {useAuth} from "../hooks/use-auth.js";
import "./NavBar.css"

function NavBar() {
  const {auth, setAuth} = useAuth();
  const[menuOpen, setMenuOpen] = useState(false)  


  const handleLogout = () => {
    window.localStorage.removeItem("token");
    setAuth({ token: null });
  };

  console.log(auth)
  
  return (
    <div>
       <nav>
        <Link to="/" className="title">Home</Link>
       <div className="menu" onClick={() => {
        setMenuOpen(!menuOpen)
       }}>
        <span></span>
        <span></span>
        <span></span>       
       </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
          {auth.token ? (
            <NavLink to="/" onClick={handleLogout}>
              Log Out
            </NavLink>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/bands">Bands</NavLink>
          </li>
          <li>
            <NavLink to="/tours">Tours</NavLink>  
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
       </ul>      

      </nav>    



      {/* React Router will pass components into the <Outlet /> based on the path */}
      <Outlet />
    </div>

  );
}

export default NavBar;


    {/* <div className="header">
      <div className="logo-container">

      </div>
      <div className="nav-options"> */}
      {/* <nav>
        <Link to="/">Home</Link>
        {auth.token ? (
          <Link to="/" onClick={handleLogout}>
            Log Out
          </Link>
        ) : (
        <Link to="/login">Login</Link>
        )}
        <Link to="/about">About</Link>
        <Link to="/bands">Bands</Link>        
        <Link to="/tours">Tours</Link>        
        <Link to="/contact">Contact Us</Link>
      </nav> */}
