import Image, {StaticImageData} from "next/image";
import {DatePickerIcon, EventIcon, LocationIcon} from "../../icons";
import EventImg from "../../assets/images/halloween-img.png"
import {EventProps} from "@/types/component";
import FeaturedImg from "../../../assets/images/unsplash_MYRG0ptGh50.png"
import EventInfo from "@/components/common/EventCard/EventInfo";
import Button from "@/components/common/Button";
import PlaceholderFeatured from "@/assets/images/placeholder_featured.jpg"
import PlaceholderImg from "@/assets/placeholder_image.png"
export default function EventCard({event, featured}: EventProps) {

    const decideImageUrl = () => {
        let imageUrl: string | StaticImageData;
        
        if (event?.artist?.image_url) {
            if (featured) {
            //     USE FEATURED IMAGE
                imageUrl = event?.artist?.image_url
            } else {
                // USE NORMAL IMAGE
                imageUrl = event?.artist?.image_url
            }
        } else {
            if (featured) {
                //     USE PLACEHOLDER FOR FEATURED IMAGE
                imageUrl = PlaceholderFeatured
            } else {
            // USE PLACE FOR NORMAL IMAGE
                imageUrl = PlaceholderImg
            }
        }
        console.log('Deciding', {[`image ${event.venue.name}`]: event?.artist?.image_url})
        return imageUrl
    }

    return (
        <div
            className={`bg-white-400 flex flex-col ${featured ? '2/4 swiper-slide' : 'w-[355px]'} gap-4  justify-center overflow-hidden p-4 rounded-lg event-card`}>
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
                        <Button text={`Buy Ticket ${featured ? "(Featured)" : ""}`} onClick={() => {
                        }}/>
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