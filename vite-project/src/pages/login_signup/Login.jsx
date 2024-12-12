import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const recivelogin = await fetch(`http://localhost:3000/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), //this method is used to send the data in the json format to the backend
      });
      const response = await recivelogin.json();

      if (recivelogin.ok) {
        alert("Login successfull");

        localStorage.setItem("token", response.token);
      } else {
        alert("Login fail");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.full}>
      <div>
        <h1 className={style.hello}>Login</h1>
        <div className={style.element}>
          <input
            type="email"
            name="email"
            id="e1"
            placeholder="Email"
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            id="e1"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <br />
          <br />
          <button onClick={onSubmit}>Login</button>
        </div>
        <div>
          <p>
            don't have an account ? <Link to="/Signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;