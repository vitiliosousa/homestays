import { FloatingLabelInput } from "@/components/FloatingLabelInput";
import { FloatingLabelPasswordInput } from "@/components/FloatingLabelPasswordInput";
import Image from "next/image";
import google from "@/assets/google.svg";
import apple from "@/assets/apple.svg";
import facebook from "@/assets/facebook.svg";

export default function Login() {
  return (
    <div className="flex flex-col w-3/4 gap-3">
      <h1 className="text-3xl font-semibold">Login</h1>
      <p className="text-sm">Login to access your Golobe account</p>
      <form className="flex flex-col gap-4 w-full py-6">
        <div className="flex flex-col gap-4 w-full">
          <FloatingLabelInput
            label="Email"
            name="email"
            type="email"
            required
          />
          <FloatingLabelPasswordInput
            label="Password"
            name="password"
            required
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label htmlFor="remember-me" className="text-xs">
                Remember me
              </label>
            </div>
            <a href="/auth/forgot-password" className="text-xs text-slamon hover:underline">
              Forgot Password
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <button
            type="submit"
            className="bg-mint text-black text-xs font-semibold h-10 px-4 rounded w-full"
          >
            Login
          </button>
          <p className="text-xs text-center font-semibold">
            Don't have an account?{" "}
            <a href="/auth/signup" className="text-slamon hover:underline">
              Sign up
            </a>
          </p>
        </div>
        <div className="flex items-center w-full gap-2">
  <hr className="border-gray-300 flex-grow" />
  <p className="text-xs text-gray-500 whitespace-nowrap">or login with</p>
  <hr className="border-gray-300 flex-grow" />
</div>
      </form>
      <div className="flex items-center justify-center gap-4 w-full">
            <button className="flex items-center justify-center h-10 w-full rounded border  border-mint"><Image src={facebook} alt=""/></button>
            <button className="h-10 rounded flex items-center justify-center border w-full border-mint"><Image src={google} alt=""/></button>
            <button className="h-10 rounded border w-full border-mint flex items-center justify-center"><Image src={apple} alt=""/></button>
        </div>
    </div>
  );
}
