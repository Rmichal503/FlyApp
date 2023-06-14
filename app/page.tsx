'use client'
import axios from 'axios'
import { useEffect } from 'react'
import FlightSearch from './components/flightSearch/FlightSearch.component'
import FlightDestination from './flightData/page'

export default function Home() {
  useEffect(()=>{
    const fetchLatLon = async() =>{
      
      navigator.geolocation.getCurrentPosition(async({coords})=>{
        console.log(coords);
        const res = await(await (await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&hourly=temperature_2m,precipitation_probability,precipitation&forecast_days=1`)).data)
        console.log(res);
      })
    }
    fetchLatLon()
  },[])
  // const flyData = async()=>{
  //   const res = await 
  //   const {data} = res
  //   console.log(data);
  // }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FlightSearch/>
    </main>
  )
}
