import React, { Component } from "react";
import { NavItem } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { baseUrl } from "./config";
import { PersonDetails } from "../State/Reducers/PersonDetails";
import "../MainBody/Fetching.css";

export default class EventGall extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      ltr: true,
    };
    return (
      <div>
        <h2>Event's</h2>
        <Slider {...settings}>
          {PersonDetails.person.map((item) => {
            console.log("hiiiiiiiii", item);
            return (
              <div>
                <div>
                  <img className="img-card" src={item.image} />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
