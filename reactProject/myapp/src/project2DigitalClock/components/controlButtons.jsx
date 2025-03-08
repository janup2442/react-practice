import { useEffect, useState } from "react";


export default function ClockController(){
    const week = ["Sunday","Monday","Tuesday","Wednesday","Thusday","Friday","Saturday"];
    const Month = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"];
    const [weekDay , setWeekDay] = useState("")
    const [month, setMonth] = useState("")
    const [year,  setYear] = useState("")
    const [date,  setDate] = useState("")
    useEffect(()=>{
        const date = new Date();
        setWeekDay(date.getDay())
        setMonth(date.getMonth())
        setYear(date.getFullYear())
        setDate(date.getDate())
    },[])
    setInterval(()=>{
        const date = new Date();
        setWeekDay(date.getDay())
        setMonth(date.getMonth())
        setYear(date.getFullYear())
        setDate(date.getDate())
    },3000000)
    return(
        <>
            <div style={{
                color:"brown"
            }}>
                {week[weekDay]} , {Month[month]} {date} , {year}
            </div>
        </>
    )
}