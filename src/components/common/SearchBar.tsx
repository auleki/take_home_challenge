import { SearchIcon } from "../icons";

export default function SearchBar() {
    return (
        <div className="bg-white-400 p-2 px-3 flex rounded-lg items-center gap-2 outline-2 outline outline-gray-200 w-96">
            <SearchIcon />
            <input 
                type="text" 
                placeholder="Search" 
                className="border-transparent focus:border-transparent outline-none text-black-400 focus:ring-0 w-full"
                />
        </div>
    )
}