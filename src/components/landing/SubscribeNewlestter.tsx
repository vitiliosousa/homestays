import mail from "@/assets/mail.svg";
import Image from "next/image";

export default function SubscribeNewlestter() {
  return (
    <div className="w-4/5 h-full flex items-center justify-between rounded-xl bg-[#E5CCAC]">
      <div className="w-full flex pt-4 px-6 flex-col space-y-2">
        <h1 className="font-semibold text-4xl">
          Subscribe <br /> Newlestter
        </h1>
        <p className="text-sm">The Travel!</p>
        <p className="text-xs">
          Get inspired! Receive travel discounts, tips and behind the scenes
          stories.
        </p>
        <div>
          <input
            type="text"
            placeholder="Your email address"
            className="w-80 h-10 px-4 rounded placeholder:text-blackish bg-white text-xs"
          />
          <button className="w-30 h-10 bg-blackish font-semibold text-white rounded ml-2 text-xs">
            Subscribe
          </button>
        </div>
      </div>
      <Image src={mail} alt="mail" className="h-56 mr-4" />
    </div>
  );
}
