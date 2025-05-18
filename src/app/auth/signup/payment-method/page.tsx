'use client';

import { FloatingLabelInput } from "@/components/FloatingLabelInput";
import { FloatingLabelSelect } from "@/components/FloatingLabelSelect";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
    const next = () => {
        router.push("/auth/login");
    }
    return (
    <div className="flex flex-col w-3/4 gap-3">
      <a
        href="/auth/signup"
        className="flex items-center gap-2 text-sm font-semibold"
      >
        <ChevronLeft className="h-4 w-4" /> Back
      </a>
      <h1 className="text-3xl font-semibold">Add a payment method</h1>
      <p className="text-sm">
        Let’s get you all st up so you can access your personal account.
      </p>
      <form className="flex flex-col gap-4 w-full py-6">
        <div className="flex flex-col gap-4 w-full">
          <FloatingLabelInput
            label="Card Number"
            name="cardNumber"
            type="number"
            required
          />
          <div className="flex w-full gap-4">
            <FloatingLabelInput
              label="Exp. Date"
              name="expDate"
              type="text"
              required
            />
            <FloatingLabelInput label="CVC" name="cvc" type="number" required />
          </div>
          <FloatingLabelInput
            label="Name on Card"
            name="nameOnCard"
            type="text"
            required
          />
          <FloatingLabelSelect
            label="Country or Region"
            name="country"
            options={[
              { value: "br", label: "Brazil" },
              { value: "us", label: "United States" },
              { value: "pt", label: "Mozambique" },
            ]}
            required
            className="border-gray-300"
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label htmlFor="remember-me" className="text-xs">
                Securely save my information for 1-click checkout
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <button
            onClick={next}
            className="bg-mint text-black text-xs font-semibold h-10 px-4 rounded w-full"
          >
            Add payment method
          </button>
          <p className="text-xs text-center text-zinc-400">
            By confirming your subscription, you allow The Outdoor Inn Crowd
            Limited to charge your card for this payment and future payments in
            accordance with their terms. You can always cancel your
            subscription.
          </p>
        </div>
      </form>
    </div>
  );
}
