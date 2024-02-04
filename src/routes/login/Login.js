
import React, { useState } from "react";
import axios from "axios";


import Navbars from "../../components/navbar/Navbars";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log(email, password)
    console.log({
      email,
      password,
    });
    try {
      const response = await axios.post("http://localhost:3030/users/login", {
        email,
        password,
      });
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <Navbars></Navbars>
      <div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
