import { Star } from "lucide-react";
import Image from "next/image";
import { reviews } from "@/data/reviews";
import google from "@/assets/google.svg";

export default function Reviews() {
  return (
    <div className="w-4/5 flex flex-col items-center justify-between gap-4 py-10 space-y-4">
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <h1 className="font-semibold text-2xl">Reviews</h1>
          <p className="text-sm">What people says about Golobe facilities</p>
        </div>
        <button className="border border-mint rounded p-2 font-semibold text-sm hover:bg-mint hover:text-white ease-in-out duration-300">
          See All
        </button>
      </div>
      <div className="flex items-center justify-between w-full gap-4">
        {reviews.map((review, index) => (
        <div className="w-[400px] h-[500px] rounded-xl shadow-lg p-5 bg-white space-y-4" key={index}>
          <h1 className="text-xl ">{review.title}</h1>
          <p className="text-xs text-zinc-500">
            {review.description}
          </p>
          <div className="flex">
            <Star className="text-[#FFC107]" fill="#FFC107" />
            <Star className="text-[#FFC107]" fill="#FFC107" />
            <Star className="text-[#FFC107]" fill="#FFC107" />
            <Star className="text-[#FFC107]" fill="#FFC107" />
            <Star className="text-[#FFC107]" fill="#FFC107" />
          </div>
          <div>
            <p>{review.name}</p>
            <p className="text-xs text-zinc-500">{review.role}</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={google} alt="Google" className="w-5 h-5" />
            <p className="text-xs text-zinc-500">Google</p>
          </div>
          <Image src={review.image} alt="Review" className="w-full h-[200px] rounded-xl" />
        </div>
        ))}
      </div>
    </div>
  );
}
