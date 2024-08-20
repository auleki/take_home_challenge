import Image from "next/image"
import AvatarImg from "../../assets/images/girl_avatar.png"
import {CaretIcon} from "@/components/icons";

const AvatarDropdown = () => {
  return (
    <section className="flex items-center gap-4">
        <Image width={40} className="rounded-xl" height={40} src={"https://photos.bandsintown.com/thumb/17067732.jpeg"} alt="Avatar" objectFit="cover"/>
        <span className="font-bold">Bernice</span>
        <span 
            className="bg-gray-400 cursor-pointer rounded-[8px] p-2 hover:bg-gray-200 hover:-translate-y-0.5 active:translate-y-0.5 duration-100 flex items-center">
            <CaretIcon />
        </span>
    </section>
  )
}

export default AvatarDropdown