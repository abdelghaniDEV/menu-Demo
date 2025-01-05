import { Globe, Info, MapPin } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header({ menu }) {
  return (
    <div className="flex justify-between pt-4 items-center container" style={{ 
      backgroundColor: menu?.template,
      
     }}>
      <div>
        <span className="text-[20px] font-[600]">
          {menu?.restaurantId.name}
        </span>
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4 " style={{ 
            color : menu?.template.primaryColor
           }} />
          <span className=" text-gray-600 text-[12px]">
            {menu?.restaurantId.address}
          </span>
        </div>
      </div>
      <div>
         <Info  className="h-8 w-8" style={{ 
          color : menu?.template.primaryColor
          }}/>
      </div>
      {/* <div>
          <img src={menu?.restaurantId.image} className="h-[50px] "  />
      </div> */}
      {/* <div className="flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger>
          <Globe className="w-8 h-8 rounded-full p-1" style={{ 
            backgroundColor : template?.primaryColor
           }} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mx-3">
            <DropdownMenuLabel>Translate</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>English</DropdownMenuItem>
            <DropdownMenuItem>Arabic</DropdownMenuItem>
            <DropdownMenuItem>France</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

       
      </div> */}
    </div>
  );
}
