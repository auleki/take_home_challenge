'use client'

import AvatarDropdown from "@/components/navigation/AvatarDropdown";
import SearchBar from "@/components/common/SearchBar";
import EventCard from "@/components/common/EventCard";
import EventList from "@/components/Events/EventList";
import FeaturedList from "@/components/Events/FeaturedList";
import {useContext} from "react";
import {EventContext} from "@/context/EventContext";

const Events = () => {
    const eventCtx = useContext(EventContext)
    return (
        <main className="flex min-h-screen flex-col p-24">
            <SearchBar/>
            <br/>
            {eventCtx.featuredEvents?.length ? (
                <div className={'flex flex-col gap-6 mt-4'}>
                    <h2 className={'text-xl font-semibold'}>Featured Events</h2>
                    <FeaturedList/>
                </div>
            ) : null}
            <br/>
            <div className={'flex flex-wrap justify-between rounded gap-6 mt-4'}>
                <h2 className={'text-xl font-semibold'}>All Events</h2>
                <EventList/>
            </div>
        </main>
    )
}

export default Events