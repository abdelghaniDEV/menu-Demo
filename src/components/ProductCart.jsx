import React from "react";
import { Card } from "./ui/card";
import meals003 from "../assets/meals0003.png";
import burger from "../assets/burger.jpg";

export default function ProductCart() {
  return (
    // <Card className="flex flex-col justify-center items-center rounded-[40px] overflow-hidden ">
    //   <img src={meals003} alt="Meal 3" className="w-[120px] h-[120px]" />
    //   <div className="flex items-center flex-col bg-[#c3a4cf4a] w-full rounded-t-[10px] py-2">
    //     <h2 className="text-[15px] font-[500]">Sandwitch Ladand</h2>
    //     <p className="font-[400]">$59.99</p>
    //   </div>
    // </Card>
    <Card className="flex gap-4 rounded-[20px] relative p-1 pr-4">
      <img src={burger} className="w-[100px] h-[100px] rounded-[20px]" />
      <div className="   ">
        <div className="flex justify-between ">
        <h2 className="font-[600] text-[20px] leading-[25px] pb">Burger Ladand</h2>
         
        </div>
        
        <p className="text-[13px] leading-[15px] pr-10 py-1">
          Whereas recognition of the inherent dignity
        </p>
        <div className="flex items-center justify-between">
        <span className="text-[12px] font-[500] bg-[#f2e9ff] my-1 py-1 px-2 rounded-[20px] text-black">Burger</span>
        <span className="text-[18px] font-[500] bg-[] text-red-500">$59.99</span>
        </div>
       
        {/* <span className="text-[18px] font-[500] ">$59.99</span> */}
      </div>
     
      {/* <div className="bg-[#c3a4cf4a] absolute  right-0 h-full w-[50%]"></div> */}
    </Card>
  );
}
