import Image, {StaticImageData} from "next/image";
import {DatePickerIcon, EventIcon, LocationIcon} from "../../icons";
import EventImg from "../../assets/images/halloween-img.png"
import {EventProps, IEvent} from "@/types/component";
import FeaturedImg from "../../../assets/images/unsplash_MYRG0ptGh50.png"
import EventInfo from "@/components/common/EventCard/EventInfo";
import Button from "@/components/common/Button";
import PlaceholderFeatured from "@/assets/images/placeholder_featured.jpg"
import PlaceholderImg from "@/assets/placeholder_image.png"
import {red} from "next/dist/lib/picocolors";
export default function EventCard({event, featured}: EventProps) {

    const decideImageUrl = () => {
        let imageUrl: string | StaticImageData;
        
        if (event?.artist?.image_url) {
            if (featured) {
                imageUrl = event?.artist?.image_url
            } else {
                // include this just in case the thumbnail picture would be different
                imageUrl = event?.artist?.image_url
            }
        } else {
            if (featured) {
                imageUrl = PlaceholderFeatured
            } else {
                imageUrl = PlaceholderImg
            }
        }
        return imageUrl
    }
    
    const redirectToEventURL = (url: string) => {
        // push route onto history stack - enable user use back
        window.location.href = url
    }

    return (
        <div
            className={`bg-white-400 flex flex-col ${featured ? 'w-[400px] swiper-slide' : 'w-[355px]'} gap-4 justify-center overflow-hidden p-4 rounded-md event-card`}>
            {/* Image */}
            <div className="w-full mb-2 overflow-x-hidden rounded-md">
                <Image
                    width={featured ? 900 : 355}
                    height={featured ? 100 : 300}
                    src={decideImageUrl()}
                    alt="event-cover"
                    objectFit="cover"
                    style={{
                        maxHeight: '375px',
                        minHeight: '375px',
                        objectPosition: 'top',
                        objectFit: 'cover'
                    }}
                />
            </div>
            <section className="flex gap-6 text-gray-300 w-full justify-between">
                {/* LEFT */}
                <div className={`flex gap-2 flex-col ${featured ? 'w-full' : 'w-4/6'}`}>
                    {/* TITLE */}
                    <EventInfo type={'title'} value={event?.venue?.name}/>

                    {/* LOCATION */}
                    <div className={'flex gap-8'}>
                        <EventInfo type={"location"} value={event?.venue?.city}/>
                        {featured ? (
                            // Use a full date here
                            <span className={'flex gap-3 items-center w-[120px]'}>
                                <span className="mb-[1px]"><DatePickerIcon/></span>
                                <EventInfo type={"date_featured"} value={event?.datetime}/>
                            </span>
                        ) : null}
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className={`flex ${featured ? 'justify-between' : 'flex-col'} gap-3`}>
                        {/* FEE */}
                        <EventInfo type={"fee"} value={"900,000"}/>
                        <Button text={`Buy Ticket`} onClick={() => redirectToEventURL(event?.url)}/>
                    </div>

                </div>

                {/* RIGHT */}
                {!featured ? (
                    <div className={"pl-1"}>
                        <EventInfo type={"date"} value={event?.datetime}/>
                    </div>
                ) : null}
            </section>

        </div>
    )
}