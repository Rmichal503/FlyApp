'use client'
import { createContext, Dispatch, SetStateAction, useState } from "react";
export interface ticket{
    value: number,
    trip_class: number,
    show_to_affiliates: boolean,
    origin: string,
    destination: string,
    gate: string,
    depart_date: string,
    return_date: string,
    number_of_changes: number,
    found_at: string,
    duration: number,
    distance: number,
    actual: boolean
}

interface Context{
    tickets:ticket[],
    setTickets:Dispatch<SetStateAction<ticket[]>>,
}
interface contextProps{
    children: React.ReactNode
}
export const TicketContext = createContext<Context>({
    tickets:[],
    setTickets: ()=>{/*do nothing*/},
})

export const TicketProvider: React.FC<contextProps> =({children})=>{
    const [tickets, setTickets] = useState<Array<ticket>>([])

    const value = {tickets,setTickets}
    return(<TicketContext.Provider value={value}>{children}</TicketContext.Provider>)
}