import { Trash } from "lucide-react";

export default function Card() {
  return (
    <div className="bg-mint text-black space-y-20 rounded-xl px-4 py-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="font-semibold text-xs">**** **** ****</p>
          <h1 className="font-semibold text-xl">4321</h1>
        </div>
        <Trash className="size-4 font-semibold" fill="#000000" />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-xs">Valid Thru</p>
          <p className="font-semibold">02/27</p>
        </div>
        <div className="px-2 py-1 rounded bg-black">
          <p className="text-mint font-semibold">VISA</p>
        </div>
      </div>
    </div>
  );
}
