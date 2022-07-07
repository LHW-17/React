//import { useState } from "react";
import "./login.css";
function Login() {
  return (
    <div className="login">
      <input placeholder="username"></input>
      <br></br>
      <input placeholder="password"></input>
      <br></br>
      <button>login</button>
      <button>logout</button>
    </div>
  );
}

export default Login;
