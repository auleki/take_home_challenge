import AvatarDropdown from "@/components/navigation/AvatarDropdown";

const TopNavbar = () => {
    return (
        <div className={'flex justify-between w-full px-24 pt-10'}>
            <h2 className={'text-3xl font-semibold'}>Events</h2>
            <AvatarDropdown />
        </div>
    )
}

export default TopNavbar