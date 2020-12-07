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
import Juice from "../assets/juice-bar.svg";
import Vendor from "../assets/market-vendor.svg";

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

  const restaurants = data.filter((item) => item.category === 0);

  const shop = data.filter((item) => item.category === 2);

  const market = data.filter(
    (item) => item.category === 3 || item.category === 1
  );

  return isLoading ? (
    <span>en cours de chargement</span>
  ) : (
    <div
      style={{
        background: "linear-gradient(to right, #ffffff 0%, #9069cd 100%)",
      }}
    >
      <div className="home-bg">
        <img
          src={HomeImg}
          alt="Tarte pas très apétissante"
          className="home-img"
        />
      </div>
      <div>
        <p className="restaurants-near">Restaurants Near Me</p>
        <Carousel itemsToShow={3} pagination={false}>
          {restaurants.map((restau, index) => {
            if (restau.pictures[0] || restau.description) {
              return (
                <>
                  <div className="slider" index={index}>
                    <div key={index}>
                      <Link restau to={`/restaurant/${restau.placeId}`}>
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
                          flexDirection: "column",
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
                  </div>
                </>
              );
            } else {
              return null;
            }
          })}
        </Carousel>
      </div>
      <div>
        <p className="restaurants-near">Veg Store Near Me</p>
        <Carousel itemsToShow={3} pagination={false}>
          {shop.map((restau, index) => {
            if (restau.pictures[0] || restau.description) {
              return (
                <>
                  <div className="slider" index={index}>
                    <div key={index}>
                      <Link restau to={`/restaurant/${restau.placeId}`}>
                        <img
                          className="img-restau"
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
                      </Link>
                      <h4>{restau.address && restau.address.slice(-20, -7)}</h4>
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
                      <span>
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
        </Carousel>
      </div>
      <div>
        <p className="restaurants-near">Juice Bar and Vendor Near Me</p>
        <Carousel itemsToShow={3} pagination={false}>
          {market.map((restau, index) => {
            if (
              restau.pictures[0] ||
              restau.description ||
              restau.name !== "Bojus"
            ) {
              return (
                <>
                  <div className="slider" index={index}>
                    <div key={index}>
                      <Link restau to={`/restaurant/${restau.placeId}`}>
                        <img
                          className="img-restau"
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
                      </Link>
                      <h4>{restau.address && restau.address.slice(-20, -7)}</h4>
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
                      <span className="marge">
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
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
