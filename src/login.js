import React, { useState } from "react";
import { Redirect, Link, useHistory } from "react-router-dom";
import GenerateJackpot from "./jackpot-generate";

export default function Login() {
  const [username, setUsername] = useState("");
  let history = useHistory();

  const onLogin = (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;

    if (username.value == "test") {
      console.log(username.value);
      history.push("/generate");
    }
  };
  return (
      <div className="container d-block col-xl-3 col-lg-4 col-md-4 col-sm-6 col-9 mt-5">
      <form onSubmit={onLogin} className="row justify-content-center">
        <input
          name="username"
          type="text"
                  className="form-control m-1"
          placeholder="Username"
        />
        <input
          name="password"
          type="password"
                  className="form-control m-1"
          placeholder="Password"
        />
      
              <button type="submit" className="btn btn-success w-100 m-1">
          Login
        </button>
      
      </form>
    </div>
  );
}
