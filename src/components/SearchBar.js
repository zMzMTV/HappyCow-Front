import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import HomeImg from "../assets/bg.home.webp";
import data from "../assets/data/data.json";
import Vegan from "../assets/vegan.svg";
import NoVeg from "../assets/no-veg.svg";
import VegStore from "../assets/veg-store.svg";
import Vegetarian from "../assets/vegetarian.svg";
import Delivery from "../assets/delivery.svg";
import Other from "../assets/other.svg";
import Bakery from "../assets/bakery.svg";
import HealthStore from "../assets/health-store.svg";
import Pro from "../assets/professional.svg";
import IceCream from "../assets/ice-cream.svg";
import Juice from "../assets/juice-bar.svg";
import Vendor from "../assets/market-vendor.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
  const { search } = useParams();
  const result = () => {
    let res = [];
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].address.toLowerCase().includes(search.toLowerCase()) === true ||
        data[i].name.toLowerCase().includes(search.toLowerCase()) === true
      ) {
        res.push(data[i]);
      }
    }
    return res;
  };
  const res = result();

  const DisplayRightImg = (type) => {
    // params type === data so type.type = data.type
    if (type.type === "veg-options") {
      return NoVeg;
    } else if (type.type === "vegan") {
      return Vegan;
    } else if (type.type === "Veg Store") {
      return VegStore;
    } else if (type.type === "vegetarian") {
      return Vegetarian;
    } else if (type.type === "delivery") {
      return Delivery;
    } else if (type.type === "other") {
      return Other;
    } else if (type.type === "Bakery") {
      return Bakery;
    } else if (type.type === "Health Store") {
      return HealthStore;
    } else if (type.type === "Professional") {
      return Pro;
    } else if (type.type === "Ice Cream") {
      return IceCream;
    } else if (type.type === "Juice Bar") {
      return Juice;
    } else if (type.type === "Market Vendor") {
      return Vendor;
    }
  };

  return (
    <div style={{ backgroundColor: "white", padding: "1px" }}>
      <h3 className="title-search">Results for "{search}".</h3>
      <div className="container-search">
        {res.map((restau, index) => {
          if (restau.pictures[0] || restau.description) {
            return (
              <>
                <div className="basis" key={index}>
                  <Link to={`/restaurant/${restau.placeId}`}>
                    <img
                      className="img-restau"
                      src={restau.thumbnail}
                      alt="Liste des restaurants référencé par Happy Cow Paris"
                    />
                    <div className="name-logo">
                      <img
                        className="logo-restau"
                        src={DisplayRightImg(restau)}
                        alt="Category of the restaurant"
                      />
                      <h3>{restau.name}</h3>
                    </div>
                  </Link>
                  <h4>{restau.address && restau.address.slice(-20, -7)}</h4>
                  <div
                    style={{
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon="star"
                      color={restau.rating > 0 ? "#fbb30c" : "lightgrey"}
                    />
                    <FontAwesomeIcon
                      icon="star"
                      color={restau.rating > 1 ? "#fbb30c" : "lightgrey"}
                    />
                    <FontAwesomeIcon
                      icon="star"
                      color={restau.rating > 2 ? "#fbb30c" : "lightgrey"}
                    />
                    <FontAwesomeIcon
                      icon="star"
                      color={restau.rating > 3 ? "#fbb30c" : "lightgrey"}
                    />
                    <FontAwesomeIcon
                      icon="star"
                      color={restau.rating > 4 ? "#fbb30c" : "lightgrey"}
                    />
                  </div>
                  <span className="desc">
                    {restau.description &&
                      restau.description.slice(0, 150) + "..."}
                  </span>
                </div>
              </>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default SearchBar;
