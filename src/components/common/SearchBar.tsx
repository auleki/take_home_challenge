import { SearchIcon } from "../icons";
import {ChangeEventHandler, useContext, useEffect, useState} from "react";
import {EventContext} from "@/context/EventContext";

export default function SearchBar() {
    const eventCtx = useContext(EventContext)
    const [searchInput, setSearchInput] = useState('')
    
    const updateSearchInput = (event: ChangeEventHandler<HTMLInputElement>) => setSearchInput(event.target.value)

    useEffect(() => {
        if (searchInput) searchEvents()
    }, [searchInput]);
    
    const searchEvents = () => {
        //
        console.log('Searching events...')
    }
    
    return (
        <div className="bg-white-400 p-2 px-3 flex rounded-lg items-center gap-2 outline-2 outline outline-gray-200 w-full md:w-96">
            <SearchIcon />
            <input 
                type="text" 
                placeholder={`${searchInput || "Search" }`}
                className="border-transparent focus:border-transparent outline-none text-black-400 focus:ring-0 w-full"
                value={searchInput}
                onChange={updateSearchInput}
                />
        </div>
    )
}