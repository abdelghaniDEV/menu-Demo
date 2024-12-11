import { MapPin } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between py-5">
      <div className="flex items-center gap-2">
        <div className="bg-[#F5F5F8] p-2 rounded-full">
          <MapPin className="text-[#BB86CF] w-6 h-6 " />
        </div>
        <span>Agadir. Salam</span>
      </div>
      <div></div>
    </div>
  );
}
