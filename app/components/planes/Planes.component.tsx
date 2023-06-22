import { useState } from 'react'
import Airbus from '@/public/planes/airbus.svg'
import Boeing from '@/public/planes/boeing.svg'
import Emb from '@/public/planes/emb.svg'

interface PlanesProps {
    typeOfPlane : string
}

export default function Planes({typeOfPlane}:PlanesProps){
const [seats, setSeats] = useState<Array<String[]>>([])
    let plane
    switch (typeOfPlane) {
        case 'emb':
            plane = <Emb 
            onClick={(e:Event)=>{
                // const parent = (e.target as HTMLElement)?.parentNode;
                // const targetClass = parent instanceof HTMLElement ? parent.classList[0] : null;
                // console.log(targetClass, e);
                const targetClass = (e.target as HTMLElement)?.classList[0];
                console.log(targetClass);
                if(targetClass === undefined) return
                const seatTypeAndNumb = targetClass.replace('emb_svg__','').split('_')
                console.log(seatTypeAndNumb);
                setSeats((prev)=>{
                    return [...prev,seatTypeAndNumb]
                })
                console.log(seats);
                }} />
            break;
        case 'boeing':
            plane = <Boeing 
            onClick={(e:Event)=>{
                // const parent = (e.target as HTMLElement)?.parentNode;
                // const targetClass = parent instanceof HTMLElement ? parent.classList[0] : null;
                // const targetClass = (e.target as HTMLElement).parentNode?.classList[0];
                const targetClass = (e.target as HTMLElement)?.classList[0];
                if(targetClass === undefined) return
                const seatTypeAndNumb = targetClass.replace('boeing_svg__','').split('_')
                console.log(seatTypeAndNumb);
                }} />
            break;
        case 'airbus':
            plane = <Airbus 
            onClick={(e:Event)=>{
                // const parent = (e.target as HTMLElement)?.parentNode;
                // const targetClass = parent instanceof HTMLElement ? parent.classList[0] : null;
                // const targetClass = (e.target as HTMLElement).parentNode?.classList[0];
                const targetClass = (e.target as HTMLElement)?.classList[0];
                if(targetClass === undefined) return
                const seatTypeAndNumb = targetClass.replace('airbus_svg__','').split('_')
                console.log(seatTypeAndNumb);
                }} />
            break;
        default:
            break;
    }
    return (
        <>
        {plane === undefined ? null : plane}
        </>
    )
}