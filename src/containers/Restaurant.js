import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import GoogleMapReact from "google-map-react";

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

import Data from "../assets/data/data.json";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faHome,
  faClock,
  faPhoneAlt,
  faMapMarkerAlt,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faStar, faHome, faClock, faPhoneAlt, faMapMarkerAlt, faMapMarker);

const Restaurant = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const DisplayRightColor = (type) => {
    if (
      type.type === "vegan" ||
      type.type === "Veg Store" ||
      type.type === "delivery"
    ) {
      return "green";
    } else if (type.type === "veg-options") {
      return "#dc5d5b";
    } else if (type.type === "vegetarian") {
      return "#8a2091";
    } else if (type.type === "Bakery") {
      return "#9c732a";
    } else if (type.type === "other") {
      return "lightblue";
    } else if (type.type === "Market Vendor") {
      return "blue";
    } else if (type.type === "Juice Bar") {
      return "orange";
    } else if (type.type === "Health Store") {
      return "#B59905";
    }
  };

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

  useEffect(() => {
    const fetchData = () => {
      const response = Data.find((data) => {
        return id === data.placeId.toString();
      });
      setData(response);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  const AnyReactComponent = () => (
    <FontAwesomeIcon icon="map-marker" className="mapMarker" />
  );
  console.log(Data);
  return loading === false ? (
    <div>
      <div style={{ backgroundColor: DisplayRightColor(data), padding: "1px" }}>
        <p className="restau-name">{data.name}</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div className="logo-type">
            <img src={DisplayRightImg(data)} alt="Category of the restaurant" />
            <p style={{ color: DisplayRightColor(data) }}>{data.type}</p>
          </div>
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <FontAwesomeIcon
              icon="star"
              color={data.rating > 0 ? "#fbb30c" : "lightgrey"}
            />
            <FontAwesomeIcon
              icon="star"
              color={data.rating > 1 ? "#fbb30c" : "lightgrey"}
            />
            <FontAwesomeIcon
              icon="star"
              color={data.rating > 2 ? "#fbb30c" : "lightgrey"}
            />
            <FontAwesomeIcon
              icon="star"
              color={data.rating > 3 ? "#fbb30c" : "lightgrey"}
            />
            <FontAwesomeIcon
              icon="star"
              color={data.rating > 4 ? "#fbb30c" : "lightgrey"}
            />
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "white", padding: "1px" }}>
        <div className="container">
          <div className="country">
            <FontAwesomeIcon
              icon="home"
              style={{ fontSize: "20px", marginRight: "8px" }}
            />
            <p style={{ fontWeight: 400 }}> / Europe /</p>
            <p style={{ fontWeight: 400 }}> France /</p>
            <p>Paris </p>/
          </div>
          <div className="infos">
            <div className="principal-info">
              <FontAwesomeIcon
                icon="clock"
                style={{
                  fontSize: "50px",
                  marginBottom: "30",
                  color: DisplayRightColor(data),
                }}
              />
              <p className="responsive-margin" style={{ fontWeight: 400 }}>
                10h30 - 22h30
              </p>
            </div>
            <div className="principal-info">
              <FontAwesomeIcon
                icon="phone-alt"
                style={{
                  fontSize: "50px",
                  marginBottom: "30",
                  color: DisplayRightColor(data),
                }}
              />
              <p className="responsive-margin" style={{ fontWeight: 400 }}>
                {data.phone}
              </p>
            </div>
            <div className="principal-info">
              <FontAwesomeIcon
                icon="map-marker-alt"
                style={{
                  fontSize: "50px",
                  marginBottom: "30",
                  color: DisplayRightColor(data),
                }}
              />
              <p
                className="responsive-margin"
                style={{ fontWeight: 400, fontSize: "17px" }}
              >
                {data.address}
              </p>
            </div>
          </div>
          <div style={{ marginTop: "35px" }}>
            <span className="restaurant-desc" style={{ lineHeight: "2" }}>
              {data.description && data.description.split("Open")[0]}
            </span>
          </div>
        </div>
        <div className="container">
          <Carousel itemsToShow={3} pagination={false}>
            {data.pictures.map((pic, index) => {
              console.log(pic);
              return (
                <div className="slider1">
                  <img
                    className="img-slider"
                    src={pic}
                    alt="Photo of the restaurant and some of their product"
                  />
                </div>
              );
            })}
          </Carousel>
          <div className="map">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "",
              }}
              defaultCenter={{
                lat: data.location && data.location.lat,
                lng: data.location && data.location.lng,
              }}
              defaultZoom={11}
            >
              <AnyReactComponent
                lat={data.location && data.location.lat}
                lng={data.location && data.location.lng}
                text={data.name}
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <span>en cours de chargement</span>
  );
};

export default Restaurant;
