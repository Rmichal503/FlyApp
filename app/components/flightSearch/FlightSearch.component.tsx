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
        <>
        <select onChange={(e)=>{
            setOrigin(e.target.value)
            console.log(e.target.value);
        }}>
            <option value='WAW'>Warszawa</option>
            <option value='LBN'>Lublin</option>
        </select>
        <select onChange={(e)=>{
            setdestination(e.target.value)
            console.log(e.target.value);
        }}>
            <option value='JFK'>Nowy Jork</option>
            <option value='CDG'>Paryż</option>
        </select>
        <select onChange={(e)=>{
            setcurrency(e.target.value)
            console.log(e.target.value);
        }}>
            <option value='PLN'>Złoty</option>
            <option value='USD'>Dolar</option>
        </select>
        <button onClick={fetchdata}>fetching</button>
        <form action="/api/flyData" method="GET">
        <label htmlFor="cars">Choose a car:</label>
            <select id="cars" name="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
            </select>
        <label htmlFor="foot">Choose a car:</label>
            <select id="foot" name="foot">
            <option value="volvo2">Volvo2</option>
            <option value="saab23">Saab23</option>
            <option value="fiat76">Fiat76</option>
            <option value="audi8">Audi8</option>
            </select>
            <button type="submit">wyślij</button>
        </form>
        </>
    )
}