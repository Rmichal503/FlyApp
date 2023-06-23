'use client'

import axios from "axios"
import { useState } from "react"

export default function FlightSearch(){
    const [origin,setOrigin] = useState('')
    const [destination,setdestination] = useState('')
    const [currency,setcurrency] = useState('')
    const fetchdata = async()=>{
        const res = await (await axios.get(`/api/flyData/`,{
            params:{
                origin:origin,
                destination:destination,
                currency:currency
            }
        })).data
        console.log(res);
    }

    return(
        <div className="flex w-full h-14 bg-slate-300 justify-around rounded-2xl items-center">
        <select className="rounded-2xl h-4/5 w-1/5 text-center hover:bg-slate-200 focus:bg-slate-200 transition-colors focus:outline-slate-50" onChange={(e)=>{
            setOrigin(e.target.value)
            console.log(e.target.value);
        }}>
            <option value='-'>Choose origin</option>
            <option value='WAW'>Warszawa</option>
            <option value='LBN'>Lublin</option>
        </select>
        <select className="rounded-2xl h-4/5 w-1/5 text-center hover:bg-slate-200 focus:bg-slate-200 transition-colors focus:outline-slate-50" onChange={(e)=>{
            setdestination(e.target.value)
            console.log(e.target.value);
        }}>
            <option value='-'>Choose destination</option>
            <option value='JFK'>Nowy Jork</option>
            <option value='CDG'>Paryż</option>
        </select>
        <select className="rounded-2xl h-4/5 w-1/5 text-center hover:bg-slate-200 focus:bg-slate-200 transition-colors focus:outline-slate-50" onChange={(e)=>{
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