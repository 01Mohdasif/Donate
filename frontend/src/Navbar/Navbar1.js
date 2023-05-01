// import { Link } from "react-router-dom";

// const Navbar = ({ isLoggedIn }) => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           My App
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">
//                 Home
//               </Link>
//             </li>
//             {/* <li className="nav-item">
//               <Link className="nav-link" to="/read">
//                 List
//               </Link>
//             </li> */}
//             {/* <li className="nav-item">
//               <Link className="nav-link" to="/about">
//                 About
//               </Link>
//             </li> */}
//             {/* <li className="nav-item">
//               <Link className="nav-link" to="/create">
//                 Create
//               </Link>
//             </li> */}
//             </ul>
//             {isLoggedIn ? (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/create">
//                     Create
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/read">
//                     Read
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/edit">
//                     Edit
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/logout">
//                     Logout
//                   </Link>
//                 </li>
//               </>
//             ) : null}

//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             {isLoggedIn ? null : (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/login">
//                     Login
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/register">
//                     Register
//                   </Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';

// function Navbar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   }

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   }

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand" href="#">Home</a>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav ml-auto">
//           <li className="nav-item">
//             {!isLoggedIn ? (
//               <a className="nav-link" href="#">Login</a>
//             ) : null}
//           </li>
//           <li className="nav-item">
//             {!isLoggedIn ? (
//               <a className="nav-link" href="#">Register</a>
//             ) : null}
//           </li>
//           <li className="nav-item">
//             {isLoggedIn ? (
//               <a className="nav-link" href="#">Read</a>
//             ) : null}
//           </li>
//           <li className="nav-item">
//             {isLoggedIn ? (
//               <a className="nav-link" href="#">Edit</a>
//             ) : null}
//           </li>
//           <li className="nav-item">
//             {isLoggedIn ? (
//               <a className="nav-link" href="#">Create</a>
//             ) : null}
//           </li>
//           <li className="nav-item">
//             {isLoggedIn ? (
//               <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
//             ) : null}
//           </li>
//         </ul>
//       </div>
// </nav>
//   );
// }

// export default Navbar;

// Navbar 3import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ isLoggedIn, handleLogout, navigate }) {
  const handleAddProjectClick = () => {
    navigate("/read");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          My App
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/create">
                    Create
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/read">
                    Read
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/edit">
                    Edit
                  </NavLink>
                </li>
              </>
            )}
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/project-read"
                onClick={handleAddProjectClick}
              >
                Project
              </NavLink>
            </li>
          </ul>
          {isLoggedIn && (
            <div>
              <span className="navbar-text">
                Welcome ({localStorage.getItem("email")})
              </span>
              <button
                type="button"
                className="btn btn-outline-danger ms-3"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


