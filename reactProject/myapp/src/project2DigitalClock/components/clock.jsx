import { useState } from "react"



export default function ClockDigitContainer(){
    const [hour , setHour] = useState("");
    const [sec , setSec] = useState("");
    const [min , setMin] = useState("");
    setInterval(()=>{
        const date = new Date();
        const hour = date.getHours();
        setHour(hour<10?`0${hour}`:hour);
        const sec = date.getSeconds();
        setSec(sec<10?`0${sec}`:sec);
        const min = date.getMinutes();
        setMin(min<10?`0${min}`:min);
    },1000)
    return(
        <>
            <div style={{
                fontFamily:"revert",
                fontSize:"3rem",
                fontWeight:"600",
                color:"grey"
            }}>
                {hour}:{min}:{sec}
            </div>
        </>
    )
}