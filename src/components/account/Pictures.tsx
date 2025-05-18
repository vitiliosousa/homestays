import Image from "next/image"
import cover from "@/assets/cover.svg"

export default function Pictures() {
    return(
        <div className="w-4/5 mt-10">
            <Image src={cover} alt=""/>
        </div>
    )
}