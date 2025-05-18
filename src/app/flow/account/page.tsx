import CoverPicture from "@/components/account/CoverPicture"
import avatar from "@/assets/avatar.svg"
import Image from "next/image"
import { Edit } from "lucide-react"
import ProfilePicture from "@/components/account/ProfilePicture"

export default function Account() {
    return(
        <div className="h-full w-full flex font-montserrat flex-col items-center">
            
            <CoverPicture/>
            <ProfilePicture/>
        </div>
    )
}