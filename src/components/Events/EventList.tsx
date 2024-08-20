import {IEvent} from "@/types/component";
import EventCard from "@/components/common/EventCard";
import EmptyEvents from "@/components/empty-screens/EmptyEvents";
import {useContext, useEffect, useState} from "react";
import {fetchEventDetails} from "@/services/events.service";
import {EventContext} from "@/context/EventContext";
import {BarLoader, ClimbingBoxLoader} from "react-spinners";
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
                <div className={'flex items-center gap-2'}>
                    <h2 className={'bg-purple-500 text-white-400 text-sm rounded-full px-4 p-1'}>Loading</h2>
                    <BarLoader color={"hsla(246, 59%, 40%, 1)"} />
                    <h2 className={'bg-purple-500 text-white-400 text-sm rounded-full px-4 p-1'}>Events</h2>
                </div>
            ) : <EmptyEvents/>}

        </div>
    )
}

export default EventList