import {EventInfoProps} from "@/types/component";
import {EventIcon, LocationIcon} from "@/components/icons";

const EventInfo = ({type, value}: EventInfoProps) => {
    return (
        <>
            {type === "title" ? (
                <h2 title={value} className="text-black-400 whitespace-nowrap overflow-hidden text-ellipsis w-5/6 font-semibold">{value}</h2>
            ) : null}
            
            {type === "location" ? (
                <div className="flex items-center gap-2">
                    <span><LocationIcon size={13}/></span>
                    <span>{value}</span>
                </div>
            ) : null}

            {type === "fee" ? (
                <div className="flex items-center gap-2">
                    <span><EventIcon size={15}/></span>
                    <span>Starting from <span className="text-purple-500 font-semibold">N{value}</span></span>
                </div>
            ) : null}

            {type === "date" ? (
                <section>
                    <span className={"whitespace-nowrap text-orange-300 ticket_date_icon text-sm font-semibold w-min-max w-92"}>{new Date(value).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</span>
                </section>
            ) : null}
            
            {type === "date_featured" ? (
                <section>
                    <span className={"whitespace-nowrap text-sm font-semibold"}>{new Date(value).toLocaleDateString('en-GB', { month: 'long' })}</span>
                </section>
            ) : null}
        </>
    )
}

export default EventInfo