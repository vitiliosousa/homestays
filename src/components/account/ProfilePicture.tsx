import Image from "next/image";
import avatar from "@/assets/avatar.svg";
import { Edit } from "lucide-react";

export default function ProfilePicture() {
    return(
        <div className="flex items-center flex-col justify-center">
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
                    <div className="absolute bottom-2 right-2 bg-slamon p-2 rounded-full cursor-pointer hover:bg-mint-dark transition-colors ">
                        <Edit className="h-4 w-4 text-white" />
                    </div>
                </div>
            </div>
            <h1 className="font-semibold mt-4">John Doe</h1>
            <p className="text-xs">john.doe@gmail.com</p>
        </div>
    )
}