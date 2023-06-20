'use client'
import axios from 'axios'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import FlightSearch from './components/flightSearch/FlightSearch.component'
import Weather, { WeatherProps } from './components/weather/Weather.component'
import Airbus from '../public/airbus.svg'
import Boeing from '../public/boeing.svg'
import Emb from '../public/emb.svg'
interface WeatherState{
  apparent_temperature:string,
  precipitation_probability:string
}

export default function Home() {
  // const [weather,setWeather] = useState<WeatherState>({} as WeatherState)
  // useEffect(()=>{
  //   const fetchLatLon = async() =>{
      
  //     navigator.geolocation.getCurrentPosition(async({coords})=>{
  //       console.log(coords);
  //       const now = dayjs().hour()
  //       console.log(now);
  //       const {hourly} = await(await (await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&hourly=apparent_temperature,precipitation_probability&forecast_days=1&timezone=Europe%2FBerlin`)).data)
  //       console.log(hourly);
  //       setWeather({
  //         apparent_temperature:hourly.apparent_temperature[now],
  //         precipitation_probability:hourly.precipitation_probability[now]
  //       })
  //     })
  //   }
  //   fetchLatLon()
  // },[])
  // const flyData = async()=>{
  //   const res = await 
  //   const {data} = res
  //   console.log(data);
  // }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-500">
      {/* {Object.keys(weather).length !=0?<Weather weatherProps={weather}/>:null} */}
      <FlightSearch/>
      <Emb
      onClick={(e:Event)=>{
        const targetClass = (e.target as HTMLElement).parentNode.classList[0];
        if(targetClass === undefined) return
        const seatTypeAndNumb = targetClass.replace('emb_svg__','').split('_')
        console.log(seatTypeAndNumb);
        }}
        />
      <Boeing
      onClick={(e:Event)=>{
        console.log(e);
        const targetClass = (e.target as HTMLElement).parentNode.classList[0];
        const seatCheck = e.target.parentElement.attributes[0].value
        if(seatCheck === '#43A9C7'){
          e.target.parentElement.attributes[0].value = '#000000'
        } else {
          e.target.parentElement.attributes[0].value = '#43A9C7'
        }
        if(targetClass === undefined) return
        const seatTypeAndNumb = targetClass.replace('boeing_svg__','').split('_')
        console.log(seatTypeAndNumb);
        }}
        />
      <Airbus
      onClick={(e:Event)=>{
        const targetClass = (e.target as HTMLElement).parentNode.classList[0];
        if(targetClass === undefined) return
        const seatTypeAndNumb = targetClass.replace('airbus_svg__','').split('_')
        console.log(seatTypeAndNumb);
        }}
        />
    </main>
  )
}
