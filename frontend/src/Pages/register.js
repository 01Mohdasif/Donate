import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers({
      ...users,
      [name]: value,
    });
  };

  // const handleRegister = () => {
  //   console.log("xyz");
  //   const { name, email, password, reEnterPassword } = users;
  //   if (name && email && password && password === reEnterPassword) {
  //     axios
  //       .post("http://localhost:8080/register", users)
  //       .then((res) => {
  //         console.log(res);
  //         alert(res.data.message);
  //         navigate("/login");
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //         alert("An error occurred while registering.");
  //       });
  //   } else {
  //     alert("Invalid input");
  //   }
  // };
  const handleRegister = () => {
    console.log("xyz");
    const { name, email, password, reEnterPassword } = users;
    if (name && email && password && password === reEnterPassword) {
      axios
        .post("http://localhost:8080/register", users)
        .then((res) => {
          console.log(res);
          alert(res.data.message);

          navigate("/login");
        })
        .catch((err) => {
          console.error(err);
          alert("An error occurred while registering.");
        });
    } else {
      alert("Invalid input");
    }
  };
  
  
  
  

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={users.name}
        placeholder="Your Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={users.email}
        placeholder="Your Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={users.password}
        placeholder="Your Password"
        onChange={handleChange}
      />
      <input
        type="password"
        name="reEnterPassword"
        value={users.reEnterPassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
      />
      <div className="button" onClick={handleRegister}>
        Register
      </div>
      <div>or</div>
      <div className="button" onClick={() => navigate("/login")}>
        Login
      </div>
    </div>
  );
};

export default Register;
