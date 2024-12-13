import React, { useState } from "react";
import { Card } from "./ui/card";
import meals003 from "../assets/meals0003.png";
import burger from "../assets/burger.jpg";
import meals004 from "../assets/mels0005.avif";
import meals0005 from "../assets/meals0004.avif";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

export default function ProductCart({ image, price, description, name }) {
  const [open, setOpen] = useState(false);
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.2,
       
      },
    },
  };

  return (
    <div className="h-[100px]">
      <div className="flex gap-[18px] container"  onClick={() => setOpen(true)}>
        <div>
          <h2 className="font-[500]">{name}</h2>
          <p className="text-[12px] overflow-hidden h-10 text-ellipsis text-clip">
            {description}
          </p>
          <h4 className="font-[500] text-[14px] pt-[6px]">{price} MAD</h4>
        </div>
        <div className="  ">
          <img src={image} className=" w-[300px] h-full rounded-[10px]" />
        </div>
      </div>
      <hr className="mt-3" />
      <AnimatePresence>
        {open && (
          <motion.div
            className=" z-[2000] bg-white rounded-t-[50px] fixed w-full h-screen  overflow-hidden top-[100px]"
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit="exit"
          >
            
            <div className="relative">
              <img src={image} className="rounded-t-[50px] w-full h-[350px]" />
              <X className="absolute top-4 h-8 w-8 right-4 bg-white p-1 rounded-full cursor-pointer" onClick={() => setOpen(false)}/>
            </div>
            <div className="container flex flex-col gap-[5px] pt-3">  
              <h1 className="font-[600] text-[20px]">{name}</h1>
              <span className="font-[600] ">{price} $</span>
              <p className="text-[14px]">{description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
