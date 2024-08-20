import React, {createContext, useState} from "react";
import {IEvent, IEventContext} from "@/types/component";
import {fetchEventDetails} from "@/services/events.service";


export let EventContext: React.Context<IEventContext>;
// @ts-ignore
EventContext = createContext<IEventContext>();

const EventContextProvider = ({children}: React.ReactNode) => {
    const [events, setEvents] = useState<IEvent[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [featuredEvents, setFeaturedEvents] = useState<IEvent[]>([])
    
    const updateEvents = (events: IEvent[]) => setEvents(events)    
    const updateFeaturedEvents = (events: IEvent[]) => setFeaturedEvents(events)
    const toggleIsLoading = () => setIsLoading(!isLoading)
    
    const loadEventDetails = async () => {
        await fetchEventDetails(setIsLoading, setEvents, setFeaturedEvents)
    }
    
    const contextActions = {
        events,
        featuredEvents,
        isLoading,
        updateEvents,
        updateFeaturedEvents,
        toggleIsLoading,
        loadEventDetails
    }
    
    return (
        <EventContext.Provider value={contextActions}>
            {children}
        </EventContext.Provider>
    )
}

export default EventContextProvider
