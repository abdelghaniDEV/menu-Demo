import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button } from "./ui/button";

export default function ListCategories() {
  const settings = {
    // dots: true, // Show navigation dots
    // infinite: true, // Infinite loop
    speed: 500, // Animation speed
    slidesToShow: 4, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    // autoplay: true, // Autoplay
    // autoplaySpeed: 3000, // Delay between autoplay transitions
    arrows: true, // Show navigation arrows
  };

  return (
    <div>
      <Slider {...settings} className="" >
        <Button className=" py-2 px-3 rounded-[20px] bg-[#F5F5F8]">All</Button>
        <Button className=" py-2 px-3 rounded-[20px] bg-[#F5F5F8] ">
          Burger
        </Button>
        <Button className="py-2 px-3 rounded-[20px] bg-[#F5F5F8] ">
          HotDog
        </Button>
        <Button className=" py-2 px-3 rounded-[20px]  bg-[#F5F5F8] ">
          Salade
        </Button>
      </Slider>
    </div>
  );
}
