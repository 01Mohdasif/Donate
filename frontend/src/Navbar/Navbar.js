// import { NavLink } from "react-router-dom";

// function Navbar({ isLoggedIn, handleLogout, navigate }) {
//   const handleAddProjectClick = () => {
//     navigate("/read");
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         <NavLink className="navbar-brand" to="/">
//           My App
//         </NavLink>
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
//               <NavLink className="nav-link" to="/">
//                 Home
//               </NavLink>
//             </li>
//             {isLoggedIn && (
//               <>
//                 <li className="nav-item">
//                   <NavLink className="nav-link" to="/create">
//                     Create
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link" to="/read">
//                     Read
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link" to="/edit">
//                     Edit
//                   </NavLink>
//                 </li>
//               </>
//             )}
//             {!isLoggedIn && (
//               <>
//                 <li className="nav-item">
//                   <NavLink className="nav-link" to="/login">
//                     Login
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link" to="/register">
//                     Register
//                   </NavLink>
//                 </li>
//               </>
//             )}
            // <li className="nav-item">
            //   <NavLink
            //     className="nav-link"
            //     to="/project-read"
            //     onClick={handleAddProjectClick}
            //   >
            //     Project
            //   </NavLink>
//             </li>
//           </ul>
//           {isLoggedIn && (
//             <div>
//               <span className="navbar-text">
//                 Welcome ({localStorage.getItem("email")})
//               </span>
//               <button
//                 type="button"
//                 className="btn btn-outline-danger ms-3"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



// Navbar component

// import { NavLink } from "react-router-dom";

// function Navbar({ isLoggedIn, handleLogout }) {
//   const handleLogoutClick = () => {
//     localStorage.removeItem("token");
//     handleLogout();
//   };

//   return (
//     <nav>
//       <ul>
//         <li>
//           <NavLink to="/">Home</NavLink>
//         </li>
//         {!isLoggedIn ? (
//           <li>
//             <NavLink to="/login">Login</NavLink>
//             <NavLink to="/register">Register</NavLink>
//           </li>
//         ) : (
//           <>
//             <li>
//               <NavLink to="/create">Create</NavLink>
//             </li>
//             <li>
//               <NavLink to="/read">Read</NavLink>
//             </li>
//             <li>
//               <NavLink to="/edit">Edit</NavLink>
//             </li>
//             <li>
//               <button onClick={handleLogoutClick}>Logout</button>
//             </li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;


import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar({ isLoggedIn, handleLogout }) {
  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    handleLogout();
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
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/create">
                    Create
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/read">
                    Donation
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/edit">
                    Edit
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/project-read">
                    Project
                  </NavLink>
                </li>
                
              </>
            )}
            {!isLoggedIn && (
              <>
              
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
              </>
            )}
          </ul>
          {isLoggedIn && (
            <div>
              <span className="navbar-text">
                Welcome ({localStorage.getItem("email")})
              </span>
              <button
                type="button"
                className="btn btn-outline-danger ms-3"
                onClick={handleLogoutClick}
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

