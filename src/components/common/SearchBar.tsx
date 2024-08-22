import { SearchIcon } from "../icons";
import {ChangeEventHandler, useContext, useState} from "react";
import {EventContext} from "@/context/EventContext";
import {IEvent} from "@/types/component";


export default function SearchBar() {
    const eventCtx = useContext(EventContext)
    const [searchInput, setSearchInput] = useState('')
    const [unfilteredEvents, setUnfilteredEvents] = useState<IEvent[]>([])
    const [freshSearch, setFreshSearch] = useState(true)
    
    // const updateSearchInput = (event: ChangeEventHandler<HTMLInputElement>) => setSearchInput(event.target.value)
    
    const traverseEvents = (e: ChangeEventHandler<HTMLInputElement>) => {
        const currentSearchInput = e.target.value;
        
        if (searchInput.length === 1 && freshSearch) {
            setUnfilteredEvents(eventCtx.events)
            setFreshSearch(false)
        }
        
        if (currentSearchInput.length === 0) {
            eventCtx.updateEvents(unfilteredEvents)
            setFreshSearch(true)
        } else {
            const filteredEvents =  eventCtx.events
                    ?.filter(event => event.venue.name.toLowerCase().includes(searchInput.toLowerCase()))
            
            if (filteredEvents) eventCtx.updateEvents(filteredEvents)
        }
        
        setSearchInput(currentSearchInput)
    }
    
    return (
        <div className="bg-white-400 p-2 px-3 flex rounded-lg items-center gap-2 outline-2 outline outline-gray-200 w-full md:w-96">
            <SearchIcon />
            <input 
                type="text" 
                placeholder={`${searchInput || "Search" }`}
                className="border-transparent focus:border-transparent outline-none text-black-400 focus:ring-0 w-full"
                value={searchInput}
                onChange={traverseEvents}
                />
        </div>
    )
}