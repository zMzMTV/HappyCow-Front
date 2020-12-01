import React, { useState } from "react";
import axios from "axios";
import { Select, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const SignUp = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [vegStatus, setVegStatus] = useState([]);
  const [dateOfBirth, setDateOfBirth] = useState([]);
  const [location, setLocation] = useState("");
  const [open, setOpen] = useState(false);
  const [openBirth, setOpenBirth] = useState(false);

  const history = useHistory();

  const formData = new FormData();
  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("location", location);
  formData.append("dateOfBirth", dateOfBirth);
  formData.append("vegStatus", vegStatus);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (username && email && password) {
        const response = await axios.post(
          "http://localhost:3001/user/signup",
          formData
        );
        console.log(response.data);
        setUser(response.data.token);
        history.push("/");
      } else {
        alert("missing informations!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (event) => {
    setVegStatus(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCloseBirth = () => {
    setOpenBirth(false);
  };

  const handleOpenBirth = () => {
    setOpenBirth(true);
  };

  const names = [
    "Vegan",
    "Vegetarian",
    "Raw",
    "Mostly Veg",
    "Non Veg",
    "herbivore",
    "Fruitarian",
  ];

  const year = [
    "1950",
    "1957",
    "1958",
    "1959",
    "1960",
    "1961",
    "1962",
    "1963",
    "1964",
    "1965",
    "1966",
    "1967",
    "1968",
    "1969",
    "1951",
    "1970",
    "1971",
    "1972",
    "1973",
    "1974",
    "1975",
    "1976",
    "1977",
    "1978",
    "1979",
    "1952",
    "1980",
    "1981",
    "1982",
    "1983",
    "1984",
    "1985",
    "1986",
    "1987",
    "1988",
    "1989",
    "1953",
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "1954",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "1955",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "1956",
    "2020",
  ];

  return (
    <div className="signup">
      <div className="signup-container">
        <h1>
          Rejoignez la plus grande communauté vegan et végétarienne du monde.
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="user-password">
            <div className="column">
              <label className="label">Username</label>
              <input
                className="input"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>
            <div className="column">
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="user-password">
            <div className="column-email">
              <label className="label">Email</label>
              <input
                className="input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="user-password">
            <div className="column">
              <label className="label">Veg Status</label>
              <Select
                className="input"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={vegStatus}
                onChange={handleChange}
              >
                {names.map((veg) => (
                  <MenuItem key={veg} value={veg}>
                    {veg}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="column">
              <label className="label">Birth Year</label>
              <Select
                className="input"
                open={openBirth}
                onClose={handleCloseBirth}
                onOpen={handleOpenBirth}
                value={dateOfBirth}
                onChange={(event) => {
                  setDateOfBirth(event.target.value);
                }}
              >
                {year.map((birth) => (
                  <MenuItem key={birth} value={birth}>
                    {birth}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>
          <div className="user-password">
            <div className="column-email">
              <label className="label">Your Home City</label>
              <input
                className="input"
                type="text"
                placeholder="Your Home City"
                value={location}
                onChange={(event) => {
                  setLocation(event.target.value);
                }}
              />
            </div>
          </div>
          <button type="submit" className="register">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
