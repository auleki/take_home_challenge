import axios from "axios";
import React, {Dispatch} from "react";
import {IEvent} from "@/types/component";

export const fetchEventDetails = async (
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>, 
    setEvents: React.Dispatch<React.SetStateAction<IEvent[]>>,
    setFeaturedEvents: React.Dispatch<React.SetStateAction<IEvent[]>>
) => {
    try {
        setIsLoading(true)
        const apiEndpoint = 'https://rest.bandsintown.com/artists/john%20legend/events?app_id=0ab49580-c84f-44d4-875f-d83760ea2cfe'
        const results = await axios.get(apiEndpoint)
        // Extra first three events from the events list returned
        const [eOne, eTwo, eThree, ...otherEvents] = results.data
        // console.log({results})
        setFeaturedEvents([eOne, eTwo, eThree])
        // console.log({ft: [eOne, eTwo, eThree]})
        setEvents(otherEvents)
    } catch (e) {
        console.log({e})
    } finally {
        setIsLoading(false)
    }
}
