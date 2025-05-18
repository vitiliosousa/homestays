import { Edit, CirclePlus } from "lucide-react";

export default function AccountTab() {
  return (
    <div className="flex flex-col w-full space-y-4">
      <h1 className="text-2xl">Account</h1>

      {/* Nome */}
      <div className="bg-white w-full shadow-lg py-6 px-4 flex flex-col rounded-lg space-y-6">
        <div className="flex items-center">
          <div className="flex-1">
            <h2 className="text-xs text-gray-500">Name</h2>
            <p className="font-semibold">John Doe</p>
          </div>
          <button className="ml-auto border text-xs font-semibold border-mint text-black px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-50 transition-colors hover:cursor-pointer">
            <Edit className="h-4 w-4" />
            Change
          </button>
        </div>

        {/* Email */}

        <div className="flex items-center">
          <div className="flex-1">
            <h2 className="text-xs text-gray-500">Email</h2>
            <p className="font-semibold">john.doe@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="ml-auto border text-xs font-semibold border-mint text-black px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-50 transition-colors hover:cursor-pointer">
            <CirclePlus className="h-4 w-4" />
            Add another email
          </button>
            <button className="ml-auto border text-xs font-semibold border-mint text-black px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-50 transition-colors hover:cursor-pointer">
            <Edit className="h-4 w-4" />
            Change
          </button>
          </div>
          
        </div>

        {/* Password */}
        <div className="flex items-center">
          <div className="flex-1">
            <h2 className="text-xs text-gray-500">Password</h2>
            <p className="font-semibold">*****************</p>
          </div>
          <button className="ml-auto border text-xs font-semibold border-mint text-black px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-50 transition-colors hover:cursor-pointer">
            <Edit className="h-4 w-4" />
            Change
          </button>
        </div>

        {/* Phone Number */}
        <div className="flex items-center">
          <div className="flex-1">
            <h2 className="text-xs text-gray-500">Phone Number</h2>
            <p className="font-semibold">+258 84 733 3514</p>
          </div>
          <button className="ml-auto border text-xs font-semibold border-mint text-black px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-50 transition-colors hover:cursor-pointer">
            <Edit className="h-4 w-4" />
            Change
          </button>
        </div>

        {/* Address */}
        <div className="flex items-center">
          <div className="flex-1">
            <h2 className="text-xs text-gray-500">Address</h2>
            <p className="font-semibold">
              123 Main St, Apt 4B, New York, NY 10001
            </p>
          </div>
          <button className="ml-auto border text-xs font-semibold border-mint text-black px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-50 transition-colors hover:cursor-pointer">
            <Edit className="h-4 w-4" />
            Change
          </button>
        </div>

        {/* Date of Birth */}
        <div className="flex items-center">
          <div className="flex-1">
            <h2 className="text-xs text-gray-500">Date of Birth</h2>
            <p className="font-semibold">01-04-2000</p>
          </div>
          <button className="ml-auto border text-xs font-semibold border-mint text-black px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-50 transition-colors hover:cursor-pointer">
            <Edit className="h-4 w-4" />
            Change
          </button>
        </div>
      </div>
    </div>
  );
}
