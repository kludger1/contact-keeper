import React, { useState, useContext, useEffect } from "react";
// import Alerts from '../../context/alert/alertContext';
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
import {Link} from "react-router-dom";

const Register = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "User already exists") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const emailIsValid = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else if (!emailIsValid(email)) {
      setAlert("Please enter a valid email", "danger");
    } else if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({
        name,
        email,
        password
      });
    }
  };

  return (
    <div className="form-container">
      <h1 className="main-header">Sign up</h1>
      <form className="input-container" onSubmit={onSubmit}>
        <input
          placeholder="Name"
          className="input input-name"
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          required
        />

        <input
          placeholder="Email"
          className="input"
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          required
        />

        <input
          placeholder="Password"
          className="input"
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          required
          minLength="6"
        />

        <input
          placeholder="Password"
          className="input"
          type="password"
          name="password2"
          value={password2}
          onChange={onChange}
          required
          minLength="6"
        />

        <input type="submit" value="Register" className="input-btn" />
      </form>
      <div className="info-container">
        <span className="little-info">
          Already have an account?
          <Link className="little-info--link" to="/login">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
