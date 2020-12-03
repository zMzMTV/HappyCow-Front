import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";

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

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faStar);

const Home = ({ isLoading }) => {
  const DisplayRightImg = (type) => {
    // params type === restau so type.type = restau.type
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
    } else if (type.type === "bakery") {
      return Bakery;
    } else if (type.type === "Health Store") {
      return HealthStore;
    } else if (type.type === "Professional") {
      return Pro;
    } else if (type.type === "Ice Cream") {
      return IceCream;
    }
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  };

  const restaurants = data.filter((item) => item.category === 0);

  const shop = data.filter((item) => item.category === 2);

  const market = data.filter(
    (item) => item.category === 3 || item.category === 1
  );

  return isLoading ? (
    <span>en cours de chargement</span>
  ) : (
    <div style={{ backgroundColor: "white" }}>
      <div className="home-bg">
        <img
          src={HomeImg}
          alt="Tarte pas très apétissante"
          className="home-img"
        />
      </div>
      <div className="card-container">
        <p className="restaurants-near">Restaurants Near Me</p>
        <Carousel itemsToShow={1}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {restaurants.map((restau, index) => {
              if (index < 20) {
                return (
                  <>
                    <div className="slider" index={index}>
                      <div key={index}>
                        <img
                          className="card-img "
                          src={restau.thumbnail}
                          alt="Liste des restaurants référencé par Happy Cow Paris"
                        />
                        <div className="name-logo">
                          <img
                            src={DisplayRightImg(restau)}
                            alt="Category of the restaurant"
                          />
                          <h3>{restau.name}</h3>
                        </div>
                        <h4>
                          {restau.address && restau.address.slice(-20, -7)}
                        </h4>
                        <div
                          style={{
                            flexDirection: "column",
                            marginTop: "10px",
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
                        <span className="description">
                          {restau.description &&
                            restau.description.slice(0, 150) + "..."}
                        </span>
                      </div>
                    </div>
                  </>
                );
              } else {
                return null;
              }
            })}
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
