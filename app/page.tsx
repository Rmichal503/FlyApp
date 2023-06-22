'use client'
import { useEffect, useState } from 'react'
import FlightSearch from './components/flightSearch/FlightSearch.component'
import Weather, { WeatherProps } from './components/weather/Weather.component'
import Planes from './components/planes/Planes.component'
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
    <main className="flex rounded-2xl h-5/6 w-full grow flex-col items-center justify-between p-24 outline outline-slate-300 bg-slate-500 place-self-center">
      {/* {Object.keys(weather).length !=0?<Weather weatherProps={weather}/>:null} */}
      <FlightSearch/>
      <Planes typeOfPlane={'emb'}/>

    </main>
  )
}
