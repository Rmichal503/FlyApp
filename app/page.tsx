'use client'

import { useContext, useEffect, useState } from 'react'
import FlightSearch from './components/flightSearch/FlightSearch.component'
import Weather, { WeatherProps } from './components/weather/Weather.component'
import Planes from './components/planes/Planes.component'
import { TicketContext } from './context/ticket.context'
import Ticket from './components/ticket/Ticket.component'
import Blob from '@/public/blob.svg'
import axios from 'axios'
import dayjs from 'dayjs'
import Image from 'next/image'

interface WeatherState{
  apparent_temperature:string,
  precipitation_probability:string
}


export default function Home() {
  // const [weather,setWeather] = useState<WeatherState>({} as WeatherState)
  useEffect(()=>{
    const fetchLatLon = async() =>{
      
      navigator.geolocation.getCurrentPosition(async({coords})=>{
        console.log(coords);
        // const now = dayjs().hour()
        // console.log(now);
        // const {hourly} = await(await (await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&hourly=apparent_temperature,precipitation_probability&forecast_days=1&timezone=Europe%2FBerlin`)).data)
        // console.log(hourly);
        // setWeather({
        //   apparent_temperature:hourly.apparent_temperature[now],
        //   precipitation_probability:hourly.precipitation_probability[now]
        // })
      })
    }
    fetchLatLon()
  },[])
  // const flyData = async()=>{
  //   const res = await 
  //   const {data} = res
  //   console.log(data);
  // }
  // if(tickets.length !== 0){
  //   console.log(tickets);
  // }
  return (
    <main className="flex h-5/6 w-full grow items-center justify-between p-2 place-self-center 2xl-min:px-80">
      {/* {Object.keys(weather).length !=0?<Weather weatherProps={weather}/>:null} */}
      <FlightSearch/>
      {/* {tickets.map((el)=>{
        console.log(el);
        return (<Ticket key={`${el.value}${el.depart_date}`} price={el.value} depart_date={el.depart_date}/>)
      })} */}
      {/* <Image className='-m-5 z-10'src={'/planehero.jpg'} alt='plane image hero' width={700} height={'700'}/> */}
      <Blob/>
      {/* <Planes typeOfPlane={'emb'}/> */}

    </main>
  )
}
