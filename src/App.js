import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookie from "js-cookie";

import Restaurant from "./containers/Restaurant";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import Home from "./containers/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [token, setToken] = useState(Cookie.get("userToken") || null);

  const [isLoading, setIsLoading] = useState(true);

  const setUser = (tokenToSet) => {
    if (tokenToSet) {
      // Create cookie
      Cookie.set("userToken", tokenToSet, { expires: 7 });
      setToken(tokenToSet);
    } else {
      // Delete cookie
      Cookie.remove("userToken");
      // Put state back to null
      setToken(null);
    }
  };
  return (
    <div>
      <Router>
        <Header setUser={setUser} token={token} />
        <Switch>
          <Route path="/restaurant/:id">
            <Restaurant />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/signup">
            <SignUp setUser={setUser} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
