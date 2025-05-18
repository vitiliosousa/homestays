import CoverPicture from "@/components/account/CoverPicture"
import ProfilePicture from "@/components/account/ProfilePicture"
import { Tabs } from "@/components/account/Tabs"

export default function Account() {
    return(
        <div className="h-full w-full flex font-montserrat flex-col items-center">
            <CoverPicture/>
            <ProfilePicture/>
            <Tabs/>
        </div>
    )
}