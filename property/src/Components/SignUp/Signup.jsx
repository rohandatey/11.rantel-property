import React from "react";
import "./Signup.css";


const SignUp = () => {
  return (
    <div id="signup">
      <form>
        <span id="signuptitle">Signup Page</span>
        <div className="list">
          <label htmlFor="name">UserName</label>
          <input type="text" id="name" required />
        </div>
        <div className="list">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" required />
        </div>
        <div className="list">
          <label htmlFor="pass">Password</label>
          <input type="password" id="pass" required />
        </div>

        <div className="list">
          <label htmlFor="conpass1">confirm Password</label>
          <input type="password" id="conpass1" required />
        </div>
        <button id="signupbtn">signup</button>
      </form>
    </div>
  );
};

export default SignUp;
