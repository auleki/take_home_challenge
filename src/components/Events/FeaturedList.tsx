import { useContext, useEffect, useRef, useState } from "react";
import { EventContext } from "@/context/EventContext";
import EventCard from "@/components/common/EventCard";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IEvent } from "@/types/component";
import {Autoplay, Navigation, Pagination} from "swiper/modules";

const FeaturedList = () => {
    const eventCtx = useContext(EventContext);
    const [featuredEvents, setFeaturedEvents] = useState<IEvent[] | undefined>([]);
    
    
    useEffect(() => {
        setFeaturedEvents(eventCtx.featuredEvents);
    }, [eventCtx.featuredEvents]);

    return (
        <div className="flex gap-2 swiper">
            {eventCtx.featuredEvents?.length ? (
                <Swiper
                    navigation
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={2}
                    modules={[Autoplay, Navigation]}
                    pagination={{ type: 'bullets', clickable: true }}
                >
                    {featuredEvents?.length ? featuredEvents.map((featuredEvent: IEvent) => (
                        <SwiperSlide key={featuredEvent.id}>
                            <EventCard featured event={featuredEvent} key={featuredEvent.id} />
                        </SwiperSlide>
                    )) : null}
                </Swiper>
            ) : (
                <div>
                    <h2>No Featured Events</h2>
                </div>
            )}
        </div>
    );
};

export default FeaturedList;