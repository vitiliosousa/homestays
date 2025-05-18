import Image from "next/image";
import google from "@/assets/google.svg";
import apple from "@/assets/apple.svg";
import facebook from "@/assets/facebook.svg";

export default function SocialMedia() {
    return(
        
      <div className="flex items-center justify-center gap-4 w-full">
            <button className="flex items-center justify-center h-10 w-full rounded border  border-mint hover:cursor-pointer hover:bg-mint ease-in-out duration-300"><Image src={facebook} alt=""/></button>
            <button className="h-10 rounded flex items-center justify-center border w-full border-mint hover:cursor-pointer hover:bg-mint"><Image src={google} alt=""/></button>
            <button className="h-10 rounded border w-full border-mint flex items-center justify-center hover:cursor-pointer hover:bg-mint"><Image src={apple} alt=""/></button>
        </div>
    )
}