import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button } from "./ui/button";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ListCategories({ categories , products , setProducts }) {
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

  useEffect(() => {
    if(selectCatag) {
      filterProducts()
    }
  },[selectCatag])

  const filterProducts = () => {
    const filteredProducts = products?.filter((product) => product?.categoryId.name === selectCatag);
    setProducts(filteredProducts);
    // setFilteredProducts(filteredProducts); // update filtered products state here if needed
  }
 
  return (
    <div className="container py-2">
      <Slider {...settings} className=" overflow-hidden ">
        {categories?.map((category) => {
          return (
              <button
                className={`font-[400] text-[13px] border-b-[2px] py-2 ${selectCatag === category?.name && 'border-b-[#F56949] text-[#F56949]'}`}
                id={category.name}
                onClick={(e) => setSelectCateg(category.name)}
              >
                {category.name}
              </button>
            
          );
        })}
      </Slider>
      
    </div>
  );
}
