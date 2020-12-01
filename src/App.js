import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookie from "js-cookie";

import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [token, setToken] = useState(Cookie.get("userToken") || null);

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
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/signup">
            <SignUp setUser={setUser} />
          </Route>
          <Route path="/"></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
