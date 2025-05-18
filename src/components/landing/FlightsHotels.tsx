import flights from "@/assets/flights.svg";
import hotels from "@/assets/hotels.svg";
import Image from "next/image";
import { Send } from "lucide-react";

export default function FlightsHotels() {
  return (
    <div className="flex w-4/5 gap-4 justify-between text-white py-10">
      {/* Flights */}
      <div className="h-[450px] w-[550px] rounded-xl relative overflow-hidden">
        <Image
          src={flights}
          alt="Flights Background"
          fill
          className="object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10 rounded-xl"></div>
        <div className="relative z-20 h-full flex flex-col items-center justify-end px-20 py-10 text-center gap-2">
          <h1 className="text-3xl">Flights</h1>
          <p className="text-sm">
            Search flights & places Hire to our most popular destinations
          </p>
          <button className="text-xs bg-mint text-black flex font-semibold p-3 gap-1 rounded hover:bg-mint/60 ease-in-out duration-300 hover:text-white">
            <Send className="size-4" /> Show Flights
          </button>
        </div>
      </div>

      {/* Hotels */}
      <div className="h-[450px] w-[550px] rounded-xl relative overflow-hidden">
        <Image
          src={hotels}
          alt="Hotels Background"
          fill
          className="object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10 rounded-xl"></div>
        <div className="relative z-20 h-full flex flex-col items-center justify-end px-20 py-10 text-center gap-2">
          <h1 className="text-3xl">Hotels</h1>
          <p className="text-sm">
            Search hotels & places Hire to our most popular destinations
          </p>
          <button className="text-xs bg-mint text-black flex font-semibold p-3 gap-1 rounded hover:bg-mint/60 ease-in-out duration-300 hover:text-white">
            <Send className="size-4" /> Show Hotels
          </button>
        </div>
      </div>
    </div>
  );
}
