import { BedSingle, Heart } from "lucide-react";
import Image from "next/image";
import avatar from "@/assets/avatar.svg";
export default function Header() {
  return (
    <header className="flex bg-white shadow-lg w-full h-16 px-20 items-center justify-between">
      <div className="flex items-center gap-2">
        <BedSingle />
        <p className="font-semibold text-xs">Find Stays</p>
      </div>
      <div className="flex gap-4 items-center text-xs">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5" fill="#000000" />
          <p className="font-semibold">Favourites</p>
        </div>
        <div className="h-6 w-px bg-black mx-4"></div>
        <div className="flex items-center gap-2">
          <Image
            src={avatar}
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className="font-semibold text-xs">John D.</p>
        </div>
      </div>
    </header>
  );
}
