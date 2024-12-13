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

export default function Header() {
  return (
    <div className="flex justify-between py-[10px] items-center container">
      <div>
        <span className="text-[20px] font-[600]">Hanin Cafe</span>
      </div>
      <div className="flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger>
          <Globe />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mx-3">
            <DropdownMenuLabel>Translate</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>English</DropdownMenuItem>
            <DropdownMenuItem>Arabic</DropdownMenuItem>
            <DropdownMenuItem>France</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Info />
      </div>
    </div>
  );
}
