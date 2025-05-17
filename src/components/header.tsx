import { BedSingle, Heart } from "lucide-react"

export default function Header() {
    return(
        <header className="flex border w-screen h-16 px-10 items-center">
            <div className="flex">
                <BedSingle/>
                <p className="font-semibold">Find Stays</p>
            </div>
            <div>
                <div>
                    <Heart/>
                    <p>Favourites</p>
                </div>
                <hr />
                <div></div>
            </div>
        </header>
    )
}