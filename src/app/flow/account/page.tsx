import Pictures from "@/components/account/Pictures"
import avatar from "@/assets/avatar.svg"
import Image from "next/image"
import { Edit } from "lucide-react"

export default function Account() {
    return(
        <div className="h-full w-full flex font-montserrat flex-col items-center">
            {/*Capa */}
            <Pictures/>
            <div className="relative w-full flex justify-center -mt-16">
                <div className="relative group">

                    {/* Imagem de perfil (metade dentro da capa) */}
                    <div className="relative h-32 w-32 rounded-full border-4 border-slamon overflow-hidden shadow-lg">
                        <Image
                            src={avatar}
                            alt="Profile picture"
                            fill
                            className="object-cover"
                        />
                    </div>
                    
                    {/* Ícone de edição */}
                    <div className="absolute bottom-2 right-2 bg-mint p-2 rounded-full cursor-pointer hover:bg-mint-dark transition-colors group-hover:opacity-100 opacity-0">
                        <Edit className="h-4 w-4 text-white" />
                    </div>
                </div>
            </div>
        </div>
    )
}