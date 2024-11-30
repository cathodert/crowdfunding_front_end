import { Link, Outlet } from "react-router-dom";
import {useAuth} from "../hooks/use-auth.js";

function NavBar() {
  const {auth, setAuth} = useAuth();

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    setAuth({ token: null });
  };

  console.log(auth)
  
  return (
    <div>
      <nav>
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
      </nav>
      {/* React Router will pass components into the <Outlet /> based on the path */}
      <Outlet />
    </div>
  );
}

export default NavBar;