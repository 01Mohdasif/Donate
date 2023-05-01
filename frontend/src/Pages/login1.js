// import React, { useState } from "react";
// import "./login.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = ({ setLoginUser, loginUser }) => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({
//       ...user,
//       [name]: value,
//     });
//   };

//   const handleLogin = () => {
//     axios
//       .post("http://localhost:8080/login", user)
//       .then((res) => {
//         setLoginUser(res.data.user);
//         navigate("/create");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   if (loginUser) {
//     return <p>You are already logged in!</p>;
//   }

//   return (
//     <div className="login">
//       <h1>Login</h1>
//       <input
//         type="text"
//         name="email"
//         value={user.email}
//         onChange={handleChange}
//         placeholder="Enter your Email"
//       ></input>
//       <input
//         type="password"
//         name="password"
//         value={user.password}
//         onChange={handleChange}
//         placeholder="Enter your Password"
//       ></input>
//       <div className="button" onClick={handleLogin}>
//         Login
//       </div>
//       <div>or</div>
//       <div className="button" onClick={() => navigate("/register")}>
//         Register
//       </div>
//     </div>
//   );
// };

// export default Login;



// Login component

// import { useState } from "react";
// import axios from "axios";

// function Login({ handleLogin }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8080/login", {
//         email,
//         password,
//       });
//       const { token } = response.data;
//       localStorage.setItem("token", token);
//       handleLogin(token);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Email:
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </label>
//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </label>
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default Login;



// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Login({ handleLogin }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8080/login", {
//         email,
//         password,
//       });
//       const { token } = response.data;
//       localStorage.setItem("token", token);
//       handleLogin(token);
//       navigate('/'); // Navigate to Home page after successful login
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Email:
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </label>
//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </label>
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default Login;



import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login({ handleLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("token", token);
      handleLogin(token);
      navigate("/create");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your Password"
        />
        <button type="submit">Login</button>
      </form>
      <div>or</div>
      <div className="button" onClick={() => navigate("/register")}>
        Register
      </div>
    </div>
  );
}

export default Login;
