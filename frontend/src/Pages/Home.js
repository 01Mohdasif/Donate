import React from "react";

const Home = ({ loginUser }) => {
  return (
    <div className="home">
      <h1>Welcome to the Home page!</h1>
      {loginUser ? (
        <p>You are currently logged in as {loginUser.name || loginUser.email}.</p>
      ) : (
        <p>Please log in or register to access this page.</p>
      )}
    </div>
  );
};


export default Home;
