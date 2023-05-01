import React, { useState, useEffect } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ handleLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Check if the login token is already stored in local storage
    const token = localStorage.getItem("token");
    if (token) {
      handleLogin(token);
      navigate("/create");
    }
  }, []); // Only run this effect once, when the component mounts

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (token) {
        handleLogin(token);
        navigate("/create");
      } else {
        const response = await axios.post("http://localhost:8080/login", {
          email,
          password,
        });
        const { token } = response.data;
        localStorage.setItem("token", token);
        handleLogin(token);
        navigate("/create");
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            className="form-control"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </div>
      </form>
      <div>or</div>
      <div className="btn btn-primary" onClick={() => navigate("/register")}>
        Register
      </div>
    </div>
  );
};

export default Login;
