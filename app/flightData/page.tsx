import axios from "axios"
import { useState } from "react"

// async function getData() {
//     // const formData = req.query
//     // console.log(formData);
//     const axiosRes = await axios.get('https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v2/prices/latest',{
//       headers:{
//     'x-access-token': process.env.Xaccesstoken,
//       'x-rapidapi-host': process.env.Xrapidapihost,
//       'x-rapidapi-key': process.env.Xrapidapikey
//       },
//       params:{
//         destination: 'WAW',
//         origin: 'JFK',
//         period_type: 'year',
//         one_way: '',
//         show_to_affiliates: 'true',
//         trip_class: '0',
//         beginning_of_period: ``,
//         currency: 'PLN',
//         page: '1',
//         sorting: 'price',
//         limit: '10'
//       }
//     })
//     const {data} = axiosRes
//     // return res.status(200).json({message:'done',data:data})
//     return data
//     // if (!res.ok) {
//     //   // This will activate the closest `error.js` Error Boundary
//     //   throw new Error('Failed to fetch data')
//     // }
   
//     // return res.json()
// }


const FlightDestination = async () => {
    const axiosRes = await axios.get('https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v2/prices/latest',{
      headers:{
    'x-access-token': process.env.Xaccesstoken,
      'x-rapidapi-host': process.env.Xrapidapihost,
      'x-rapidapi-key': process.env.Xrapidapikey
      },
      params:{
        destination: 'WAW',
        origin: 'JFK',
        period_type: 'year',
        one_way: '',
        show_to_affiliates: 'true',
        trip_class: '0',
        beginning_of_period: ``,
        currency: 'PLN',
        page: '1',
        sorting: 'price',
        limit: '10'
      }
    })
    const {data} = axiosRes.data
    // return res.status(200).json({message:'done',data:data})
    // if (!res.ok) {
    //   // This will activate the closest `error.js` Error Boundary
    //   throw new Error('Failed to fetch data')
    // }
  //  console.log(data);
    // return res.json()
    // const [destination, setDestination] = useState('')
    // const [origin, setOrigin] = useState('')
    // const [currency, setCurrency] = useState('')
  return (
    data?(<div>
      <pre>{data[0].value}</pre>
  </div>):null
  )
}

export default FlightDestination