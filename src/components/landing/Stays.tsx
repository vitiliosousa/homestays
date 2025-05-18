import { Send, BedDouble } from "lucide-react";
import { FloatingLabelInput } from "../FloatingLabelInput";
import { FloatingLabelSelect } from "../FloatingLabelSelect";
export default function Stays() {
  return (
    <div className="w-4/5 h-50 flex flex-col justify-between bg-white p-5 -m-24 rounded shadow-lg z-20 relative">
      <h2 className="text- font-semibold flex items-center gap-2"><BedDouble className="h-5 w-5"/>Stays</h2>
      <div className="flex items-center justify-center gap-4">
        <FloatingLabelInput label="From-To" name="fromTo" type="text"/>
        <FloatingLabelSelect
                    label="Trip"
                    name="trip"
                    options={[
                      { value: "going", label: "Going" },
                      { value: "return", label: "Return" },
                    ]}
                    required
                    className="border-gray-300"
                  />
        <FloatingLabelInput label="Depart-Return" name="departReturn" type="text"/>
        <FloatingLabelInput label="Passenger-Class" name="passengerClass" type="text"/>
      </div>
      <div className="flex items-center justify-end">
        <button className="text-xs font-semibold hover:bg-zinc-200 px-4 py-2 rounded ease-in-out duration-300">+ Add Promo Code</button>
        <button className="bg-mint rounded px-4 py-2 ml-4 text-xs flex gap-1 items-center justify-center font-semibold"><Send className="h-4 w-4"/>Show Flights</button>
      </div>
    </div>
  );
}
