'use client'

import { TicketContext } from "@/app/context/ticket.context"
import axios from "axios"
import { useContext, useState } from "react"

export default function FlightSearch(){
    const {setTickets} = useContext(TicketContext)
    const [origin,setOrigin] = useState('')
    const [destination,setdestination] = useState('')
    const [currency,setcurrency] = useState('')
    const fetchdata = async()=>{
        const {data} = await axios.get(`/api/flyData/`,{
            params:{
                origin:origin,
                destination:destination,
                currency:currency
            }
        })
        // console.log(data);
        setTickets(data.flights)
    }

    return(
        <div className="flex w-full h-full bg-slate-300 justify-around rounded-2xl p-2">
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
        <button onClick={fetchdata}>fetching</button>
        </div>
    )
}