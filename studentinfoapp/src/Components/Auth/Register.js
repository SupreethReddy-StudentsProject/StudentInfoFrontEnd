import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [apiError, setApiError] = useState("");
  const [apiSucess, setApiSucess] = useState(true);
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const EmailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const validateSignUp = () => {
    const Errors = {};
    if (userName.length === 0) {
      Errors.usernameMessage = "Username is Required!";
    } else if (userName.length < 4) {
      Errors.usernameMessage = "Username must be at least 4 characters long!";
    } else {
      Errors.usernameMessage = "";
    }

    if (password.length === 0) {
      Errors.passwordMessage = "Password is Required!";
    } else if (password.length < 8) {
      Errors.passwordMessage = "Password must be at least 8 characters long!";
    } else {
      Errors.passwordMessage = "";
    }
    if (email.length === 0) {
      Errors.emailMessage = "Email Id is Required";
    } else if (!EmailRegex.test(email)) {
      Errors.emailMessage = "Invalid email address";
    }
    return Errors;
  };

  const signUp = async (event) => {
    event.preventDefault();
    setError(validateSignUp());

    if (
      userName.length >= 4 &&
      password.length >= 8 &&
      email.length >= 4 &&
      EmailRegex.test(email)
    ) {
      let data = {
        userName,
        email,
        password,
      };
      let result = await fetch("https://localhost:7153/api/Users/SignUp", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "applicaation/json",
        },
      });
      result = await result.json();
      if (result?.success) {
        navigate("/home");
      } else if (!result?.success && result?.message?.length > 0) {
        setApiError(result.message);
        setApiSucess(result.success);
        setTimeout(() => {
          setApiError("");
          setApiSucess(true);
        }, 10000);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "userName":
        setuserName(value);
        break;
      case "password":
        setpassword(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="Signup ">
      <br />
      <br />

      <h4 className="signup_heading col-sm-6 offset-sm-5">
        Create new account
      </h4>
      <br />
      <br />
      {!apiSucess && <span className="Apierror"> {apiError}</span>}
      <br />
      <form onSubmit={signUp}>
        <label className="susername_label">
          UserName
          <input
            type="text"
            value={userName}
            name="userName"
            onChange={(e) => handleChange(e)}
            className="signup_username form-control"
            placeholder="abc123"
            autoComplete="off"
          ></input>
        </label>
        {error.usernameMessage?.length > 0 && (
          <span className="error">{error.usernameMessage}</span>
        )}
        <br />
        <br />
        <label className="semail_label">
          Email Id
          <input
            type="text"
            value={email}
            name="email"
            onChange={(e) => handleChange(e)}
            className="signup_email form-control"
            placeholder="abc@mail.com"
          ></input>
        </label>
        {error.emailMessage?.length > 0 && (
          <span className="error">{error.emailMessage}</span>
        )}
        <br />
        <br />
        <label className="spassword_label">
          Password
          <input
            type="password"
            value={password}
            name="password"
            onChange={(e) => handleChange(e)}
            className="signup_password form-control"
            placeholder="password"
          ></input>
        </label>
        {error.passwordMessage?.length > 0 && (
          <span className="error">{error.passwordMessage}</span>
        )}
        <br />
        <br />
        <div className="signup_button_div">
          <button type="submit" className="signup_btn">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
export default Register;
