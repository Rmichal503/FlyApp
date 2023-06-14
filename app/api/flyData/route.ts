import axios from "axios";
// import type { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(req:NextApiRequest,res:NextApiResponse){
//     const formData = req.query
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
//     // console.log(axiosRes);
//     const {data} = axiosRes
//     // console.log(data);
//     // return data
// }
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const origin = searchParams.get('origin')
  const destination = searchParams.get('destination')
  const currency = searchParams.get('currency')
  const { data } = await axios.get(
    "https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v2/prices/latest",
    {
      headers: {
        "x-access-token": process.env.Xaccesstoken,
        "x-rapidapi-host": process.env.Xrapidapihost,
        "x-rapidapi-key": process.env.Xrapidapikey,
      },
      params: {
        destination: destination,
        origin: origin,
        period_type: "year",
        one_way: "",
        show_to_affiliates: "true",
        trip_class: "0",
        beginning_of_period: ``,
        currency: currency,
        page: "1",
        sorting: "price",
        limit: "10",
      },
    }
  );

  return NextResponse.json({ data });
}
