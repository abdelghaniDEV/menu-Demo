import React, { useState } from "react";
import { Card } from "./ui/card";
import meals003 from "../assets/meals0003.png";
import burger from "../assets/burger.jpg";
import meals004 from "../assets/mels0005.avif";
import meals0005 from "../assets/meals0004.avif";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
    <div className="h-[100px] container">
      <div
        className="flex justify-between gap-6   border-b-[1px] pb-3 "
        onClick={() => setOpen(true)}
      >
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="font-[500]">{name}</h2>
            <p className="text-[12px] overflow-hidden h-10 text-ellipsis ">
              {description}
            </p>
          </div>
          <h4 className="font-[500] text-[14px] pt-[6px]">{price} MAD</h4>
        </div>

        <img src={image} className=" w-[100px] h-[100px] rounded-[10px]" />
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger></DialogTrigger>
        <DialogContent className="rounded-t-[50px] border-none">
          <DialogHeader>
            <DialogDescription>
              <div className="relative">
                <img
                  src={image}
                  className="rounded-t-[50px] w-full h-[350px]"
                />
                {/* <X
                  className="absolute top-4 h-8 w-8 right-4 bg-white p-1 rounded-full cursor-pointer"
                  onClick={() => setOpen(false)}
                /> */}
              </div>
              <div className="container flex flex-col gap-[5px] py-3 text-black text-start">
                <h1 className="font-[600] text-[20px]">{name}</h1>
                <span className="font-[600] ">{price} $</span>
                <p className="text-[14px]">{description}</p>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
