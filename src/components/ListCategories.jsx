import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button } from "./ui/button";

export default function ListCategories({ categories }) {
  const [selectCatag, setSelectCateg] = useState("");
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

  // useEffect(() => {
  //   changeCategory()
  // },[selectCatag])

  const changeCategory = (e) => {
    const target = e.target;
    target.classList.add("border-b-[#0B363C]");
  };

  return (
    <div>
      <Slider {...settings} className="container overflow-hidden my-3">
        {categories?.map((category) => {
          return (
            <Button className="" id={category.name} onClick={(e) => changeCategory(e)}>
              {category.name}
            </Button>
          );
        })}
      </Slider>
    </div>
  );
}
