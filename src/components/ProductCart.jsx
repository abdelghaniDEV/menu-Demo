import React from "react";
import { Card } from "./ui/card";
import meals003 from "../assets/meals0003.png";
import burger from "../assets/burger.jpg";

export default function ProductCart() {
  return (
    <div className="h-[100px]">
      <div className="flex gap-[18px]">
        <div>
          <h2 className="font-[500]">Salade Nicoise</h2>
          <p className="text-[12px] overflow-hidden h-10 text-ellipsis">
            Une sélection de magasins et de chaînes de marque connus de tous
            afin de vous servir au mieux. Découvrez toutes les catégories
          </p>
          <h4 className="font-[500] text-[14px] pt-2">37.00 MAD</h4>
        </div>
        <div className="  ">
          <img src={burger} className=" w-[300px]  rounded-[10px]"/>
        </div>
      </div>
      <hr className="mt-3"/>
    </div>
  );
}
