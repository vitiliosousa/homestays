'use client'
import { FloatingLabelPasswordInput } from "@/components/FloatingLabelPasswordInput";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {

  const router = useRouter();
  const next = () => {
    router.push("/auth/set-password");
  }

  return (
    <div className="flex flex-col w-3/4 gap-3">
      <a
        href="/auth/login"
        className="flex items-center gap-2 text-sm font-semibold"
      >
        <ChevronLeft className="h-4 w-4" /> Back to login
      </a>
      <h1 className="text-3xl font-semibold">Verify Code</h1>
      <p className="text-sm">
        An authentication code has been sent to your email.
      </p>
      <form className="flex flex-col gap-4 w-full py-6">
        <FloatingLabelPasswordInput label="Enter Code" name="password" required />
        <button
        onClick={next}
          className="bg-mint text-black text-xs font-semibold h-10 px-4 rounded w-full"
        >
          Verify 
        </button>
        
      <p className="text-xs">Didn't receive a code? <a href="#" className="text-slamon hover:underline">Resend</a></p>
      </form>
    </div>
  );
}
