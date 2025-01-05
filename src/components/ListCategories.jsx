import React, { useState } from "react";
import { Button } from "./ui/button";

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
    <div className="container flex items-center gap-2 py-3">
      {categories?.map((category) => {
        return (
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
        );
      })}
    </div>
  );
}
