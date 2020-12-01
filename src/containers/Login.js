import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Happy from "../assets/happycow.png";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Se connecter</h2>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            placeholder="Mot de passe"
          />
          <button
            type="submit"
            onClick={async () => {
              const response = await axios.post(
                "http://localhost:3001/user/login",
                {
                  email: email,
                  password: password,
                }
              );
              if (response.data.token) {
                setUser(response.data.token);
                alert("got it");
              } else {
                alert("Une erreur est survenue");
              }
            }}
          >
            Se connecter
          </button>
          <Link to="/signup"> Pas encore de compte ? Inscris-toi !</Link>
          <img
            className="happy-logo"
            src={Happy}
            alt="Logo de la marque Happy Cow"
          ></img>
        </form>
      </div>
    </div>
  );
};

export default Login;
