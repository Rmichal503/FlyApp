export interface WeatherProps {
  weatherProps: {
    apparent_temperature: string;
    precipitation_probability: string;
  };
}
export default function Weather({ weatherProps }: WeatherProps) {
  console.log(weatherProps);
  const { apparent_temperature, precipitation_probability } = weatherProps;
  console.log(apparent_temperature);
  return (
  <div>
    <div>Temp: <span className="text-xl">{apparent_temperature} &deg;C</span></div>
    <div>Prawdopodbieństwo opadów: <span className="text-xl">{precipitation_probability}%</span></div>
  </div>
  )
}
