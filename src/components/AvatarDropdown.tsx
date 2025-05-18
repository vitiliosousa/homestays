import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import avatar from "@/assets/avatar.svg";
import {
  User,
  CreditCard,
  Settings,
  LifeBuoy,
  LogOut,
  ChevronRight,
} from "lucide-react";

export default function AvatarDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <Image
          src={avatar}
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="px-5 font-montserrat">
        <div className="flex items-center justify-start p-4 w-[200px]">
          <Image
            src={avatar}
            alt="avatar"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div className="flex flex-col items-start justify-center ml-2">
            <p className="font-semibold">John D.</p>
            <p className="text-xs">Online</p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <div className="flex flex-col w-full justify-center py-2 space-y-2">
          <div className="flex items-center justify-between hover:text-mint cursor-pointer ease-in-out duration-300">
            <div className="flex gap-2 items-center">
              <User className="w-4 h-4" />
              <p className="text-sm">My Account</p>
            </div>
            <ChevronRight className="w-4 h-4" />
          </div>
          <div className="flex items-center justify-between hover:text-mint cursor-pointer ease-in-out duration-300">
            <div className="flex gap-2 items-center">
              <CreditCard className="w-4 h-4" />
              <p className="text-sm">Payments</p>
            </div>
            <ChevronRight className="w-4 h-4" />
          </div>
          <div className="flex items-center justify-between hover:text-mint cursor-pointer ease-in-out duration-300">
            <div className="flex gap-2 items-center">
              <Settings className="w-4 h-4" />
              <p className="text-sm">Settings</p>
            </div>
            <ChevronRight className="w-4 h-4" />
          </div>
          <DropdownMenuSeparator />
        
          <div className="flex items-center justify-between hover:text-mint cursor-pointer ease-in-out duration-300">
            <div className="flex gap-2 items-center">
              <LifeBuoy className="w-4 h-4" />
              <p className="text-sm">Support</p>
            </div>
            <ChevronRight className="w-4 h-4" />
          </div>
          <div className="flex items-center justify-between hover:text-mint cursor-pointer ease-in-out duration-300">
            <div className="flex gap-2 items-center">
              <LogOut className="w-4 h-4" />
              <p className="text-sm">Logout</p>
            </div>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
