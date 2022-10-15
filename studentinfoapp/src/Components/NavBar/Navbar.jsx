import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./NavbarStyle.css";

const Navbar = (props) => {
  const { Login, SetLogin } = props;
  const logoutfn = () => {
    SetLogin(false);
    Cookies.remove("Jwt");
  };
  return (
    <header>
      <span className="container navbar_main">
        <Link className="Home_nav" to="/home">
          <h2>Student Info</h2>
        </Link>

        {!Login ? (
          <span className="loginandsignup">
            <Link className="signup_nav" to="/SignUp">
              <h4>SignUp</h4>
            </Link>
            <Link className="login_nav" to="/LogIn">
              <h4>LogIn</h4>
            </Link>
          </span>
        ) : (
          <>
            <Link className="login_nav" onClick={logoutfn} to="/LogIn">
              <h4>Log out</h4>
            </Link>
          </>
        )}
      </span>
    </header>
  );
};

export default Navbar;
