import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
import { Link } from "react-router-dom";

import "../../App.css";
import "../styles/form.css";

const Login = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill in all fields", "danger");
    } else {
      login({
        email,
        password
      });
    }
  };

  return (
    <div className="form-container">
      <h1 className="main-header">Login</h1>
      <form className="input-container" onSubmit={onSubmit}>
        <input
          className="input"
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          required
        />

        <input
          className="input"
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          required
        />

        <input type="submit" value="Login" className="input-btn" />
      </form>
      <div className="info-container">
        <span className="little-info">
          Don’t have an Account?
          <Link className="little-info--link" to="/register">
            Signup
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
