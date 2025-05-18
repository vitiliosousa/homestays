import fundo from "@/assets/fundo1.jpg";
import Image from "next/image";
import { BedSingle } from "lucide-react";
export default function FindStays() {
  return (
    <div className="relative h-[580px] w-full text-white flex flex-col items-center justify-center overflow-hidden">
        <Image
          src={fundo}
          alt="Fundo"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="relative z-10 flex flex-col items-center space-y-10 w-full h-full bg-black/60">

          <div className="flex justify-between items-center  w-4/5 mt-20">
            <div className="flex w-full items-center gap-2">
              <BedSingle className="size-5" />
              <p className="text-sm">Find Stays</p>
            </div>
            <div className="flex gap-6 items-center justify-center">
              <a className="text-sm hover:underline hover:text-mint ease-in-out duration-300" href="/auth/login">
                Login
              </a>
              <a className="text-blackish font-semibold bg-white w-20 py-2 rounded text-sm hover:bg-gray-200 ease-in-out duration-300 items-center justify-center flex" href="/auth/signup">
                Sign up
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-5">
            <h2 className="text-4xl font-semibold">Helping Others</h2>
            <h1 className="text-6xl font-semibold">LIVE & TRAVEL</h1>
            <h3>Special offers to suit your plan</h3>
          </div>
        </div>
      </div>

     
  );
}