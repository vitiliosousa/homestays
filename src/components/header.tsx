import { BedSingle, Heart } from "lucide-react";
import AvatarDropdown from "@/components/AvatarDropdown";

export default function Header() {
  return (
    <header className="bg-white shadow-lg w-full h-16 flex items-center justify-center">
      <div className="flex w-4/5 items-center justify-between">
        <div className="flex items-center gap-2">
          <BedSingle />
          <p className="font-semibold text-xs">Find Stays</p>
        </div>
        <div className="flex gap-4 items-center text-xs">
          <a className="flex items-center gap-2" href="/flow/favourites">
            <Heart className="w-5 h-5" fill="#000000" />
            <p className="font-semibold">Favourites</p>
          </a>
          <div className="h-6 w-px bg-black mx-4"/>
          <div className="flex items-center gap-2">
            <AvatarDropdown />
            <p className="font-semibold text-xs">John D.</p>
          </div>
        </div>
      </div>
    </header>
  );
}
