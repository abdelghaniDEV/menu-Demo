import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Card } from "./ui/card";

export default function ProductCart({
  image,
  price,
  description,
  name,
  template,
}) {
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
    <div className="flex justify-between md:flex-row-reverse border-b-[1px] cursor-pointer md:border-none pb-2  ">
      <div
        className="w-[70%] flex flex-col justify-between "
        onClick={() => setOpen(true)}
      >
        <div>
          <h1
            className="font-[600] text-[17px]"
            style={{
              color: template?.titleColor,
            }}
          >
            {name}
          </h1>
          <p className="text-[13px] overflow-hidden line-clamp-2">
            {description}
          </p>
        </div>
        <div>
          <span
            className="font-[600] text-[13px]"
            style={{
              color: template?.titleColor,
              fontSize : template?.language === 'en' ? '13px' : '18px',
              
            }}
          >
            {template?.currency} {price}
          </span>
        </div>
      </div>
      <div className="relative  z-40 " onClick={() => setOpen(true)}>
        <img
          src={image}
          className=" w-[80px]  h-[80px] border-[2px] border-white p-1 rounded-[20px]"
        />
        <div
          className="absolute bottom-0 right-[-15px] rounded-tl-full z-[-1] h-[80%]  w-[120px]"
          style={{
            backgroundColor: template?.primaryColor,
          }}
        ></div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="rounded-t-[50px] border-none">
          <DialogHeader>
            <DialogDescription>
              <div className="relative" >
                <img
                  src={image}
                  className="rounded-t-[50px] w-full h-[350px]"
                />
                {/* <X
                  className="absolute top-4 h-8 w-8 right-4 bg-white p-1 rounded-full cursor-pointer"
                  onClick={() => setOpen(false)}
                /> */}
              </div>
              <div className="container flex flex-col gap-[5px] py-3 text-black text-start" style={{ 
                fontFamily : template?.fontFamily,
               direction: template?.language === 'en' ? 'ltr' : 'rtl',
               }}>
                <h1 className="font-[600] text-[20px]">{name}</h1>
                <span className="font-[600] text-[14px] ">{price} {template.currency}</span>
                <p className="text-[14px]">{description}</p>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
