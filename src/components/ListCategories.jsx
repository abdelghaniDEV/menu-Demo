import React, { useState } from "react";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function ListCategories({
  categories,
  products,
  template,
  setFilter,
}) {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    const filteredProducts = products.filter(
      (product) => product.categoryId._id === categoryId
    );
    setFilter(filteredProducts);
    setActiveCategory(categoryId);
  };

  return (
    <div className="container">
      <Swiper
        modules={[ Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
      >
        {categories?.map((category) => (
          <SwiperSlide key={category._id}>
            <Button
              className="py-2 px-3 border-[1px] rounded-[6px]"
              style={{
                backgroundColor:
                  activeCategory === category._id
                    ? template.primaryColor
                    : "#F5F5F8",
                color: activeCategory === category._id ? "white" : "black",
              }}
              onClick={() => handleCategoryClick(category._id)}
            >
              {category.name}
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
