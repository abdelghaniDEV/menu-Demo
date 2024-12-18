import React, { useEffect, useState } from "react";
import Header from "./ui/Header";
import { Search } from "lucide-react";
import ListCategories from "./ListCategories";
import ProductCart from "./ProductCart";
import meals003 from "../assets/meals0003.png";
import burger from "../assets/burger.jpg";
import meals004 from "../assets/mels0005.avif";
import meals0005 from "../assets/meals0004.avif";
import { useParams } from "react-router";
import axios from "axios";

export default function Home() {
  const [menu , setMenu] = useState()
  const [products , setProducts] = useState()
  const params = useParams();
  useEffect( () => {
    fetchMenu()
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/menus/${params.menuID}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken"),
          },
        }
      );
      console.log(response.data.data.menu);
      setMenu(response.data.data.menu)
      setProducts(response.data.data.menu.products)
    }catch (e) {
      console.error(e);
    }
  }
  return (
    <div className="">
      <Header />
      <div>
        <div className="container">
          <div className="relative my-2">
            <input
              type="text"
              placeholder="Search Here ..."
              className="h-10 rounded-[20px] text-base w-full bg-[#F5F5F8] px-4 py-2 focus:outline-none "
            />
            <Search className="absolute right-[10px] text-[#F56949] top-[10px]" />
          </div>
        </div>
        <ListCategories categories={menu?.categorys} products={menu?.products} setProducts={setProducts} />
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {products?.map((product) => {
              return <ProductCart
              image={product.image}
              name={product.name}
              description={
                product.description
              }
              price={product.price}
            />
            } )}
            
          </div>
        </div>
      </div>
    </div>
  );
}
