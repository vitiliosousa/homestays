import { Plane, BedDouble } from "lucide-react";
import Ticket from "./Ticket";

export default function HistoryTab() {
  return (
    <div className="flex flex-col w-full space-y-4">
      <h1 className="text-2xl">Tickets/Bookings</h1>
      <div className="bg-white w-full shadow-lg py-6 px-4 grid grid-cols-2 rounded-lg">
        <div className="flex items-center gap-2">
          <Plane className="size-4" /> <p className="font-semibold text-sm">Flights</p>
        </div>
        <div className="flex items-center gap-2">
          <BedDouble className="size-4" /> <p className="font-semibold text-sm">Stays</p>
        </div>
      </div>
      <Ticket/>
      <Ticket/>
      <Ticket/>
    </div>
  );
}
