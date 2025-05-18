"use client";
import { FloatingLabelPasswordInput } from "@/components/FloatingLabelPasswordInput";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SetPassword() {
  const router = useRouter();
  const next = () => {
    router.push("/auth/login");
  };

  return (
    <div className="flex flex-col w-3/4 gap-3">
      <h1 className="text-3xl font-semibold">Set a password</h1>
      <p className="text-sm">
        Your previous password has been reseted. Please set a new password for
        your account.
      </p>
      <form className="flex flex-col gap-4 w-full py-6">
        <FloatingLabelPasswordInput
          label="Create Password"
          name="password"
          required
        />
        <FloatingLabelPasswordInput
          label="Re-enter Password"
          name="password"
          required
        />
        <button
          onClick={next}
          className="bg-mint text-black text-xs font-semibold h-10 px-4 rounded w-full hover:cursor-pointer hover:bg-mint/80 ease-in-out duration-300"
        >
          Set Password
        </button>
      </form>
    </div>
  );
}
