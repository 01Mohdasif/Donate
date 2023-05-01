// import React, { useState } from "react";
// import { Route, Routes, useNavigate } from "react-router-dom";
// import axios from "axios";

// import Navbar from "./Navbar/Navbar";
// import Home from "./Pages/Home";
// import Login from "./Pages/login";
// import Create from "./Pages/Create";
// import Read from "./Pages/Read";
// import Edit from "./Pages/Edit";
// import Register from "./Pages/register";
// import Project from "./Pages/Project";
// import ProjectRead from "./Pages/ProjectRead";
// import ProjectEdit from "./Pages/ProjectEdit";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [loginUser, setLoginUser] = useState(null);

//   const handleLogin = (user) => {
//     setLoginUser(user);
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     setLoginUser(null);
//     setIsLoggedIn(false);
//   };

//   const navigate = useNavigate();

//   const authAxios = axios.create({
//     baseURL: "http://localhost:8080",
//     headers: {
//       Authorization: `Bearer ${loginUser?.token}`,
//     },
//   });

//   return (
//     <div>
//       <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} navigate={navigate} />
//       <div className="container">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route
//             path="/login"
//             element={
//               <Login setLoginUser={setLoginUser} loginUser={loginUser} />
//             }
//           />
//           <Route
//             path="/create"
//             element={<Create authAxios={authAxios} navigate={navigate} />}
//           />
//           <Route
//             path="/read"
//             element={<Read authAxios={authAxios} navigate={navigate} />}
//           />
//           <Route
//             path="/edit"
//             element={<Edit authAxios={authAxios} navigate={navigate} />}
//           />
//           <Route path="/register" element={<Register />} />
//           <Route
//             path="/add-project"
//             element={<Project authAxios={authAxios} navigate={navigate} />}
//           />
//           <Route
//             path="/project-read"
//             element={<ProjectRead authAxios={authAxios} />}
//           />
//           <Route
//             path="/project-edit"
//             element={<ProjectEdit authAxios={authAxios} />}
//           />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "./Navbar/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/login";
import Create from "./Pages/Create";
import Read from "./Pages/Read";
import Edit from "./Pages/Edit";
import Register from "./Pages/register";
import Project from "./Pages/Project";
import ProjectRead from "./Pages/ProjectRead";
import ProjectEdit from "./Pages/ProjectEdit";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginUser, setLoginUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    if (token && email) {
      setLoginUser({ token, email });
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (user) => {
    const { name, email, token } = user;
    setLoginUser({ name, email, token }); // set name, email, and token properties
    setIsLoggedIn(true);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
  };
  
  

  const handleLogout = () => {
    setLoginUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/");
  };
  

  const navigate = useNavigate();

  const authAxios = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
      Authorization: `Bearer ${loginUser?.token}`,
    },
  });

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} navigate={navigate} />
      <div className="container">
        <Routes>
        <Route path="/" element={<Home loginUser={loginUser} />} />

          <Route
            path="/login"
            element={<Login handleLogin={handleLogin} />}
          />
          {isLoggedIn && (
            <>
              <Route
                path="/create"
                element={<Create authAxios={authAxios} navigate={navigate} />}
              />
              <Route
                path="/read"
                element={<Read authAxios={authAxios} navigate={navigate} />}
              />
              <Route
                path="/edit"
                element={<Edit authAxios={authAxios} navigate={navigate} />}
              />
            </>
          )}
          {!isLoggedIn && (
            <>
              <Route path="/register" element={<Register />} />
            </>
          )}
          <Route
            path="/project-read"
            element={<ProjectRead authAxios={authAxios} />}
          />
          <Route
            path="/add-project"
            element={<Project authAxios={authAxios} />}
          />
          <Route
            path="/project-edit"
            element={<ProjectEdit authAxios={authAxios} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;

