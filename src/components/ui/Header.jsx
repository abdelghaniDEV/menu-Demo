import { Globe, Info, MapPin, Search } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header({ menu }) {
  return (
    <div
      className="flex justify-between pt-4 items-center container"
      style={{
        backgroundColor: menu?.template,
      }}
    >
      <div>
        <span className="text-[30px] md:text-[20px] font-[600]">
          {menu?.restaurantId.name}
        </span>
        <div className="flex items-center gap-1">
          <MapPin
            className="w-4 h-4 "
            style={{
              color: menu?.template.primaryColor,
            }}
          />
          <span className=" text-gray-600 text-[13px]">
            {menu?.restaurantId.address}
          </span>
        </div>
      </div>
      <div className="container w-[800px] hidden md:block">
        <div className="relative my-2">
          <input
            type="text"
            placeholder="Search Here ..."
            className="h-8  rounded-[16px] text-[14px] w-full bg-[#F5F5F8] px-4 py-1 focus:outline-none "
            // onChange={handelSerch}
          />
          <Search
            className={`absolute ${
              menu?.template.language === "en" ? "right-[10px]" : "left-[10px]"
            }  top-[4px]`}
            style={{
              color: menu?.template.primaryColor,
            }}
          />
        </div>
      </div>
      <div>
        <Sheet>
          <SheetTrigger>
            <Info
              className="h-8 w-8"
              style={{
                color: menu?.template.primaryColor,
              }}
            />
          </SheetTrigger>
          <SheetContent className="w-full">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <div
                className="flex flex-col gap-2 items-center py-4"
                style={{
                  backgroundColor: menu?.template.backgroundColor,
                  fontFamily: menu?.template.fontFamily,
                }}
              >
                <div>
                  <img
                    src={menu?.restaurantId.image}
                    className="w-[200px] max-h-[100px]"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <MapPin
                    className="w-4 h-4 "
                    style={{
                      color: menu?.template.primaryColor,
                    }}
                  />
                  <span className=" text-gray-600 text-[13px]">
                    {menu?.restaurantId.address}
                  </span>
                </div>
                <div>
                  <p className="text-[13px]">
                    {menu?.restaurantId.description}
                  </p>
                </div>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
