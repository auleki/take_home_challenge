import AvatarDropdown from "@/components/navigation/AvatarDropdown";
import { FiMenu } from "react-icons/fi";

const TopNavbar = () => {
    return (
        <div className={'flex justify-between w-full px-10 sm:px-24 pt-10'}>
            <h2 className={'text-3xl font-semibold'}>Events</h2>
            <div className="hidden sm:flex">
                <AvatarDropdown />
            </div>
            
            <div className="flex sm:hidden">
                <FiMenu size={32}/>
            </div>
        </div>
    )
}

export default TopNavbar