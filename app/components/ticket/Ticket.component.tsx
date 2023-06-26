import Image from "next/image"

interface TicketProps{
    price:number,
    depart_date:string
}

export default function Ticket({price,depart_date}:TicketProps){

    return(
        <div className="w-11/12 h-10 m-1 px-3 bg-slate-800 rounded-3xl flex justify-end items-center text-slate-100">
            <Image className="mr-auto place-self-start" src={'/icons/airplane_ticket_black_24dp.svg'} width={36} height={36} alt='ticket icon' />
            <div className="flex mx-1 w-1/4">
                <Image className="fill-slate-50 mx-1" src={'/icons/attach_money_black_24dp.svg'} width={24} height={24} alt='takeoff icon'/>
                <span>{price}</span>
            </div>
            <div className="flex mx-2 w-1/3">
                <Image className="fill-slate-50 mx-1" src={'/icons/flight_takeoff_black_24dp.svg'} width={24} height={24} alt='takeoff icon'/>
                <span>{depart_date}</span>
            </div>
        </div>
    )
}
