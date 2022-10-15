import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./NavbarStyle.css";

const Navbar = (props) => {
  const navigate = useNavigate();
  const { Login, UpdateLogin } = props;
  const logoutfn = () => {
    navigate("/LogIn");
    UpdateLogin(false);
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
          <div>
            <button className="logout_nav" onClick={logoutfn}>
              <h4>Log out</h4>
            </button>
          </div>
        )}
      </span>
    </header>
  );
};

export default Navbar;
