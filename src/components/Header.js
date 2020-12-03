import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faAngleDoubleDown);

const Header = ({ setUser, token }) => {
  return (
    <div className="header">
      <div className="header-container">
        <div>
          <Link to="/">
            <img
              className="header-logo"
              src={Logo}
              alt="Le logo Happy Cow en haut à droite de la page"
            />
          </Link>
        </div>
        <div>
          <Link className="header-icon">
            <p className="none">Restaurants & Stores</p>
            <FontAwesomeIcon icon="angle-double-down" />
          </Link>
        </div>
        <div>
          <Link>
            <p className="none">Feed The Cow</p>
          </Link>
        </div>
        {token ? (
          <button
            className="button-login"
            onClick={() => {
              setUser(null);
            }}
          >
            Se déconnecter
          </button>
        ) : (
          <>
            <div className="button-login">
              <Link to="/login">
                <span>Login</span>
              </Link>
            </div>
            <div className="button-signup">
              <Link to="/signup">
                <span>Sign Up</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
