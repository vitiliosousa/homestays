'use client';
import { FloatingLabelInput } from "@/components/FloatingLabelInput";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {

  const router = useRouter();
  const next = () => {
    router.push("/auth/verify-code");
  }

  return (
    <div className="flex flex-col w-3/4 gap-3">
      <a href="/auth/login" className="flex items-center gap-2 text-sm font-semibold"><ChevronLeft className="h-4 w-4"/> Back to login</a>
      <h1 className="text-3xl font-semibold">Forgot your password?</h1>
      <p className="text-sm">
        Don’t worry, happens to all of us. Enter your email below to recover
        your password
      </p>
      <form className="flex flex-col gap-4 w-full py-6">
        <FloatingLabelInput label="Email" name="email" type="email" required />
        <button
          className="bg-mint text-black text-xs font-semibold h-10 px-4 rounded w-full hover:cursor-pointer hover:bg-mint/80 ease-in-out duration-300"
          onClick={next}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
