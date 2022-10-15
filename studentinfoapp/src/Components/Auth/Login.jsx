import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./login.css";
const Login = (props) => {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const [apiError, setApiError] = useState("");
  const [apiSucess, setApiSucess] = useState(true);
  const {
    UpdateLogin,
    error,
    setError,
    SetPasswordlength,
    SetUsernamelength,
    passwordlength,
    usernamelength,
  } = props;
  const navigate = useNavigate();

  const validateLogIn = () => {
    const Errors = {};
    if (usernamelength === 0) {
      Errors.usernameMessage = "Username is Required!";
    } else if (usernamelength < 4) {
      Errors.usernameMessage = "Username must be at least 4 characters long!";
    } else {
      Errors.usernameMessage = "";
    }

    if (passwordlength === 0) {
      Errors.passwordMessage = "Password is Required!";
    } else if (passwordlength < 8) {
      Errors.passwordMessage = "Password must be at least 8 characters long!";
    } else {
      Errors.passwordMessage = "";
    }
    return Errors;
  };

  const Loginfn = async (event) => {
    event.preventDefault();
    setError(validateLogIn());
    console.log(error);
    if (passwordlength >= 8 && usernamelength >= 4) {
      let data = { userName, password };
      let result = await fetch("https://localhost:7153/api/Users/Login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "applicaation/json",
        },
      }).catch((er) => {
        return er;
      });
      result = await result.json();
      if (result != null && result.success) {
        UpdateLogin(result.success);
        Cookies.set("Jwt", result.data, 1);
        navigate("/home");
      } else if (!result?.success && result?.message?.length > 0) {
        setApiError(result.message);
        setApiSucess(result.success);
        setTimeout(() => {
          setApiError("");
          setApiSucess(true);
        }, 5000);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "userName":
        setuserName(value);
        SetUsernamelength(value.length);
        break;
      case "password":
        setpassword(value);
        SetPasswordlength(value.length);
        break;
      default:
        break;
    }
  };
  return (
    <div className="Login ">
      <br />
      <br />
      <h4 className="Login_heading col-sm-6 offset-sm-5">
        {" "}
        Login to your account
      </h4>
      <br />
      <br />
      {!apiSucess && <span className="Apierror"> {apiError}</span>}
      <br />
      <form onSubmit={Loginfn}>
        <div className="login_fields">
          <label className="label_username">
            UserName
            <input
              type="text"
              name="userName"
              onChange={(e) => handleChange(e)}
              className="username_login form-control"
              placeholder="abc123"
              autoComplete="off"
            ></input>
          </label>
          {error.usernameMessage?.length > 0 && (
            <span className="error">{error.usernameMessage}</span>
          )}
          <br />
          <br />
          <label className="label_pass">
            Password
            <input
              type="password"
              name="password"
              onChange={(e) => handleChange(e)}
              className="password_login form-control"
              placeholder="password"
            ></input>
          </label>
          {error.passwordMessage?.length > 0 && (
            <span className="error">{error.passwordMessage}</span>
          )}
        </div>
        <br />
        <br />
        <div className="login_button_div">
          <button type="submit" className="Login_button ">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
