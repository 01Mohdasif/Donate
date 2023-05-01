import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleLogin = () => {
    const { email, password } = credentials;
    if (email && password) {
      axios
        .post("http://localhost:8080/login", credentials)
        .then((res) => {
          console.log(res);
          alert(res.data.message);
          navigate("/");
        })
        .catch((err) => {
          console.error(err);
          alert("Invalid email or password.");
        });
    } else {
      alert("Invalid input");
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={credentials.email}
        placeholder="Your Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={credentials.password}
        placeholder="Your Password"
        onChange={handleChange}
      />
      <div className="button" onClick={handleLogin}>
        Login
      </div>
      <div>or</div>
      <div className="button" onClick={() => navigate("/register")}>
        Register
      </div>
    </div>
  );
};

export default Login;


















// for register


