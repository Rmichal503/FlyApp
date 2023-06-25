interface TicketProps{
    price:number,
    depart_date:string
}

export default function Ticket({price,depart_date}:TicketProps){
    
    return(
        <div className="w-4/5 h-10 bg-slate-800 rounded-3xl flex justify-around items-center text-slate-100">
            <span>Price: {price}</span>
            <span>Departure date: {depart_date}</span>
        </div>
    )
}