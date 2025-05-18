'use client';

import { FloatingLabelInput } from "@/components/FloatingLabelInput";
import { FloatingLabelPasswordInput } from "@/components/FloatingLabelPasswordInput";
import Image from "next/image";
import google from "@/assets/google.svg";
import apple from "@/assets/apple.svg";
import facebook from "@/assets/facebook.svg";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const next = () => {
    router.push("/auth/signup/payment-method");
  };
  return (
    <div className="flex flex-col w-3/4 gap-3">
      <h1 className="text-3xl font-semibold">Sign up</h1>
      <p className="text-sm">
        Let’s get you all st up so you can access your personal account.
      </p>
      <form className="flex flex-col gap-4 w-full py-6">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex w-full gap-4">
            <FloatingLabelInput
              label="First Name"
              name="firstName"
              type="text"
              required
            />
            <FloatingLabelInput
              label="Last Name"
              name="lastName"
              type="text"
              required
            />
          </div>
          <div className="flex w-full gap-4">
            <FloatingLabelInput
              label="Email"
              name="email"
              type="text"
              required
            />
            <FloatingLabelInput
              label="Phone Number"
              name="phoneNumber"
              type="number"
              required
            />
          </div>
          <FloatingLabelPasswordInput
            label="Password"
            name="password"
            required
          />
          <FloatingLabelPasswordInput
            label="Confirm Password"
            name="confirmPassword"
            required
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label htmlFor="remember-me" className="text-xs">
                I agree to all the <a href="#" className="text-slamon">Terms</a> and <a href="#" className="text-slamon">Privacy Policies</a> 
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <button
            onClick={next}
            className="bg-mint text-black text-xs font-semibold h-10 px-4 rounded w-full"
          >
            Create account
          </button>
          <p className="text-xs text-center font-semibold">
            Already have an account?{" "}
            <a href="/auth/login" className="text-slamon hover:underline">
              Login
            </a>
          </p>
        </div>
        <div className="flex items-center w-full gap-2">
  <hr className="border-gray-300 flex-grow" />
  <p className="text-xs text-gray-500 whitespace-nowrap">or sign up with</p>
  <hr className="border-gray-300 flex-grow" />
</div>
      </form>
      <div className="flex items-center justify-center gap-4 w-full">
        <button className="flex items-center justify-center h-10 w-full rounded border  border-mint">
          <Image src={facebook} alt="" />
        </button>
        <button className="h-10 rounded flex items-center justify-center border w-full border-mint">
          <Image src={google} alt="" />
        </button>
        <button className="h-10 rounded border w-full border-mint flex items-center justify-center">
          <Image src={apple} alt="" />
        </button>
      </div>
    </div>
  );
}
