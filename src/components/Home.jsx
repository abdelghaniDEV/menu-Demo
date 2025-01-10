import React, { useEffect, useState } from "react";
import Header from "./ui/Header";
import { Search } from "lucide-react";
import ListCategories from "./ListCategories";
import ProductCart from "./ProductCart";
import meals003 from "../assets/meals0003.png";
import burger from "../assets/burger.jpg";
import meals004 from "../assets/mels0005.avif";
import meals0005 from "../assets/meals0004.avif";
import leading from "../assets/aniamte.svg";
import { useParams } from "react-router";
import axios from "axios";
import { Button } from "./ui/button";

export default function Home() {
  const [menu, setMenu] = useState();
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState();
  const params = useParams();
  console.log(params);
  const id = params.menuID.split("-").pop();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      setLoading(false);
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/menus/${id}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken"),
          },
        }
      );
      console.log(response.data.data.menu);
      setMenu(response.data.data.menu);
      setProducts(response.data.data.menu.products);
      setFilter(response.data.data.menu.products);
      setLoading(true);
      console.log(menu);
    } catch (e) {
      console.error(e);
    }
  };

  const handelSerch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.categoryId.name.toLowerCase().includes(searchTerm)
    );
    setFilter(filteredProducts);
  };
  return (
    <>
      {loading === false ? (
        <div className="reltive">
          <img
            src={leading}
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          />
        </div>
      ) : (
        <div
          className=" min-h-screen z-10"
          style={{
            backgroundColor: menu?.template.BackgroundColor,
            fontFamily: menu?.template.fontFamily,
            direction: menu?.template.language === "en" ? "ltr" : "rtl",
          }}
        >
          <div>
            <Header menu={menu} />
            {menu?.template.showBanner &&  <div className="relative z-[30] py-3">
                <img
                  src={menu?.template.banner}
                  className="w-full h-[150px] object-cover  relative z-[20] md:h-[300px] md:brightness-50 "
                  alt="Banner"
                />
                <div
                  className="h-10 absolute top-[50%] translate-y-[-50%] z-[10] w-full"
                  style={{
                    backgroundColor: menu?.template.primaryColor,
                  }}
                  
                ></div>
                <div className="absolute top-[50%] left-[50%] hidden md:block translate-x-[-50%] translate-y-[-50%] i z-[100]   ">
                    <div className="flex flex-col items-center justify-center">
                    <p className="text-[50px] text-white text-center font-[600]     ">
                      Welcom {menu?.restaurantId.name}
                    </p>
                    <Button className="text-white py-4 px-6 text-[20px] rounded-[5px] " style={{ 
                      backgroundColor: menu?.template.primaryColor,
                     }} >
                        About Us
                    </Button>
                    </div>
                </div>
              </div>}
            <div className="container">
              <div className="relative my-2">
                <input
                  type="text"
                  placeholder="Search Here ..."
                  className="h-8  rounded-[16px] text-[12px] w-full bg-[#F5F5F8] px-4 py-1 focus:outline-none "
                  onChange={handelSerch}
                />
                <Search
                  className={`absolute ${
                    menu?.template.language === "en"
                      ? "right-[10px]"
                      : "left-[10px]"
                  }  top-[4px]`}
                  style={{
                    color: menu?.template.primaryColor,
                  }}
                />
              </div>
            </div>
           
            <ListCategories
              categories={menu?.categorys}
              products={products}
              template={menu?.template}
              setFilter={setFilter}
            />
          </div>

          <div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 container gap-2 md:gap-6">
                {filter?.map((product) => {
                  return (
                    <ProductCart
                      template={menu?.template}
                      image={product.image}
                      name={product.name}
                      description={product.description}
                      price={product.price}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
