import {IEvent} from "@/types/component";
import EventCard from "@/components/common/EventCard";
import EmptyEvents from "@/components/empty-screens/EmptyEvents";
import {useContext, useEffect, useState} from "react";
import {fetchEventDetails} from "@/services/events.service";
import {EventContext} from "@/context/EventContext";
// import {XlviLoader} from "react-awesome-l"

const EventList = () => {
    const eventCtx = useContext(EventContext)
    
    useEffect(() => {
        eventCtx.loadEventDetails()
    }, []);

    useEffect(() => {
        console.log({featuredEvents: eventCtx.featuredEvents})
    }, [eventCtx.featuredEvents]);

    return (
        <div className={'flex items-start w-full rounded'}>
            {eventCtx.events.length ? (
                <div className={'flex flex-wrap justify-start gap-4 justify-between'}>
                    {eventCtx.events.map((event: IEvent) => <EventCard key={event.id} event={event}/>)}
                </div>
            ) : eventCtx.isLoading ? (
                <>
                    <h2>Loading events ...</h2>
                </>
            ) : <EmptyEvents/>}

        </div>
    )
}

export default EventList