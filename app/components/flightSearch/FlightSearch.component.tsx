'use client'

import { ticket, TicketContext } from "@/app/context/ticket.context"
import axios from "axios"
import Image from "next/image"
import { useContext, useState } from "react"
import Ticket from "../ticket/Ticket.component"

export default function FlightSearch(){
    const {setTickets} = useContext(TicketContext)
    const [origin,setOrigin] = useState('')
    const [destination,setdestination] = useState('')
    const [currency,setcurrency] = useState('')
    const [searchtickets, setSearchTickets] = useState<Array<ticket>>([])
    const fetchdata = async()=>{
        const {data} = await axios.get(`/api/flyData/`,{
            params:{
                origin:origin,
                destination:destination,
                currency:currency
            }
        })
        // console.log(data);
        setSearchTickets(data.flights)
        setTickets(data.flights)
    }

    return(
        <div className="flex flex-col w-full h-full bg-slate-300 justify-start rounded-2xl p-2">
        <div className="flex justify-around mb-2">
            <select className="rounded-2xl h-14 w-1/4 text-center hover:bg-slate-200 focus:bg-slate-200 transition-colors focus:outline-slate-50" onChange={(e)=>{
                setOrigin(e.target.value)
                console.log(e.target.value);
            }}>
                <option value='-'>Choose origin</option>
                <option value='WAW'>Warszawa</option>
                <option value='LBN'>Lublin</option>
            </select>
            <select className="rounded-2xl h-14 w-1/4 text-center hover:bg-slate-200 focus:bg-slate-200 transition-colors focus:outline-slate-50" onChange={(e)=>{
                setdestination(e.target.value)
                console.log(e.target.value);
            }}>
                <option value='-'>Choose destination</option>
                <option value='JFK'>Nowy Jork</option>
                <option value='CDG'>Paryż</option>
            </select>
            <select className="rounded-2xl h-14 w-1/4 text-center hover:bg-slate-200 focus:bg-slate-200 transition-colors focus:outline-slate-50" onChange={(e)=>{
                setcurrency(e.target.value)
                console.log(e.target.value);
            }}>
                <option value='-'>Choose currency</option>
                <option value='PLN'>Złoty</option>
                <option value='USD'>Dolar</option>
            </select>
            <button onClick={fetchdata}>
                <Image className="hover:animate-move" src={'/icons/flight_black_24dp.svg'} width={48} height={48} alt='search button icon'/>
            </button>
        </div>
        <div className="flex flex-col items-center">
            <div className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-25"></div>
            {searchtickets.length !== 0 && searchtickets.map(el=>{
                return (<Ticket key={`${el.value}${el.depart_date}`} price={el.value} depart_date={el.depart_date}/>)
            })}
        </div>
        </div>
    )
}