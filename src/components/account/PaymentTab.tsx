import Card from "@/components/account/Card";
import { CirclePlus } from "lucide-react";

export default function PaymentTab() {
  return (
    <div className="flex flex-col w-full space-y-4">
      <h1 className="text-2xl">Payment Methods</h1>
      <div className="bg-white w-full shadow-lg py-6 px-4 grid grid-cols-3 rounded-lg gap-4">
        <Card/>
        <div className="h-full flex flex-col justify-center items-center space-y-2 outline-2 outline-dashed outline-mint rounded-lg">
            <CirclePlus className="text-mint text-sm size-10" strokeWidth={1}  />
            <p className="text-xs">Add New Card</p>
        </div>
      </div>
    </div>
  );
}
