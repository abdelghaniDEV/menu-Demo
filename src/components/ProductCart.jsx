import React from "react";
import { Card } from "./ui/card";
import meals003 from "../assets/meals0003.png";
import burger from "../assets/burger.jpg";
import meals004 from "../assets/mels0005.avif"
import meals0005 from "../assets/meals0004.avif"

export default function ProductCart({image , price , description , name}) {
  return (
    <div className="h-[100px]">
      <div className="flex gap-[18px]">
        <div>
          <h2 className="font-[500]">{name}</h2>
          <p className="text-[12px] overflow-hidden h-10 text-ellipsis text-clip">
            {description}
          </p>
          <h4 className="font-[500] text-[14px] pt-[6px]">{price} MAD</h4>
        </div>
        <div className="  ">
          <img src={image} className=" w-[300px] h-full rounded-[10px]"/>
        </div>
      </div>
      <hr className="mt-3"/>
    </div>
  );
}
