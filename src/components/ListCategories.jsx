import React, { useState } from "react";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
    <div className="py-2 container">
      <Swiper
        slidesPerView={4} // عدد الشرائح المعروضة في نفس الوقت
        spaceBetween={10} // المسافة بين الشرائح
        touchEventsTarget="container" // تفعيل اللمس
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
        }}
      >
        {categories?.map((category) => (
          <SwiperSlide key={category._id}>
            <Button
              className="py-2 px-3 border-[1px] rounded-[6px] mx-1"
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