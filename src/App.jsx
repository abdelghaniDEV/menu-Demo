import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import Header from "./components/ui/Header";
import { Search } from "lucide-react";
import ProductCart from "./components/ProductCart";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ListCategories from "./components/ListCategories";

import { Route, Routes } from "react-router";
import Home from "./components/Home";

function App() {


  return (
    <Routes>
      <Route path="/:menuID" element={<Home />} />
       
      {/* <Route path="/about" element={<Cat />} /> */}
    </Routes>
    // <div className="">
    //   <Header />
    //   <div>
    //     <div className="container">
    //       {/* <h1 className="font-[400] text-[33px] leading-[38px]">
    //         What are you going to eat today ?
    //       </h1> */}
    //       <div className="relative my-2">
    //         <input
    //           type="text"
    //           placeholder="Search Here ..."
    //           className="h-10 rounded-[20px] text-base w-full bg-[#F5F5F8] px-4 py-2 focus:outline-none "
    //         />
    //         <Search className="absolute right-[10px] text-[#BB86CF] top-[10px]" />
    //       </div>
    //     </div>
    //     {/* <div className="container flex gap-1 pb-3">
    //       <Button>Salade</Button>
    //       <Button>Plats</Button>
    //       <Button>Sandwichs</Button>
    //       <Button>Burger</Button>
    //       <Button>Tacos</Button>
    //     </div> */}
    //     <ListCategories />
    //     <div>
    //       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
    //         <ProductCart
    //           image={meals0005}
    //           name={"Salade Nicoise"}
    //           description={
    //             "Une sélection de magasins et de chaînes de marque connus de tous afin de vous servir au mieux. Découvrez toutes les catégories"
    //           }
    //           price={37.55}
    //         />
    //         <ProductCart
    //           image={burger}
    //           name={"Burger Checken"}
    //           description={
    //             "Une sélection de magasins et de chaînes de marque connus de tous afin de vous servir au mieux. Découvrez toutes les catégories"
    //           }
    //           price={40.55}
    //         />
    //         <ProductCart
    //           image={meals004}
    //           name={"Pitza Mozarila"}
    //           description={
    //             "Une sélection de magasins et de chaînes de marque connus de tous afin de vous servir au mieux. Découvrez toutes les catégories"
    //           }
    //           price={80.55}
    //         />
    //         <ProductCart
    //           image={meals0005}
    //           name={"Salade Nicoise"}
    //           description={
    //             "Une sélection de magasins et de chaînes de marque connus de tous afin de vous servir au mieux. Découvrez toutes les catégories"
    //           }
    //           price={37.55}
    //         />
    //         <ProductCart
    //           image={burger}
    //           name={"Burger Checken"}
    //           description={
    //             "Une sélection de magasins et de chaînes de marque connus de tous afin de vous servir au mieux. Découvrez toutes les catégories"
    //           }
    //           price={40.55}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
