import React, { useState } from "react";
import { Redirect, Link, useHistory } from "react-router-dom";
import GenerateJackpot from "./jackpot-generate";

export default function Login() {
  const [username, setUsername] = useState("");
  let history = useHistory();

  const onLogin = (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;

    if (username.value == "system" && password.value == "XXXX") {
      console.log(username.value);
      history.push("/generate");
    }
  };
  return (
    <div className="container d-block col-xl-3 col-lg-4 col-md-4 col-sm-6 col-9 mt-5 p-2 bg-login">
      <form onSubmit={onLogin} className="row justify-content-center">
        <input
          name="username"
          type="text"
          className="form-control"
          placeholder="Username"
        />
        <input
          name="password"
          type="password"
          className="form-control"
          placeholder="Password"
        />
        <button type="submit" className="btn bg-header text-white w-100">
          Login
        </button>
      </form>
    </div>
  );
}
