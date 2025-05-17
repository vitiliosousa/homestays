import { BedSingle } from "lucide-react";
import FloatingInput from "@/components/FloatingInput";
import fundo from "@/assets/fundo.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full w-full flex font-montserrat flex-col items-center">
      {/* Primeiro Header, deve ter uma imagem de fundo */}
      <div className="relative h-[580px] w-full text-white flex flex-col items-center justify-center overflow-hidden">
        <Image
          src={fundo}
          alt="Fundo"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="relative z-10 flex flex-col items-center space-y-10 w-full h-full bg-black/80">
          {/* Header */}
          <div className="flex justify-between items-center px-10 w-full mt-20">
            <div className="flex w-full items-center gap-2">
              <BedSingle className="size-5" />
              <p className="text-sm">Find Stays</p>
            </div>
            <div className="flex gap-6">
              <button className="text-sm hover:underline hover:text-mint ease-in-out duration-300">
                Login
              </button>
              <button className="text-blackish font-semibold bg-white w-20 py-2 rounded text-sm hover:bg-gray-200 ease-in-out duration-300">
                Sign up
              </button>
            </div>
          </div>

          {/* Texto central */}
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-4xl font-semibold">Helping Others</h2>
            <h1 className="text-6xl font-semibold">LIVE & TRAVEL</h1>
            <h3 className="font-semibold">Special offers to suit your plan</h3>
          </div>
        </div>
      </div>
      {/* Card */}
      <div className="w-4/5 h-56 flex flex-col items-center justify-center bg-black px-20">
      </div>
    </div>
  );
}
