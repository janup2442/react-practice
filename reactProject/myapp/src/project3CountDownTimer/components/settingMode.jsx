import { useState } from "react";


export default function SettingModeTimer({setTime}){
    const [time ,updateTime] = useState({
        hour:0,
        minute:0,
        second:0
    });
    const onChangeTime = (e)=>{
        updateTime({
            ...time,
            [e.target.name]:e.target.value
        })
    }
    return(
        <>
            <div>
                <form action="">
                    <input onChange={(e)=>onChangeTime(e)} type="number" name="hour" min={0} max={23}/>
                    <input onChange={(e)=>onChangeTime(e)} type="number" name="minute" min={0} max={59}/>
                    <input onChange={(e)=>onChangeTime(e)} type="number" name="second" min={0} max={59}/>
                </form>
                <button onClick={()=>setTime(time)}>Start Timer</button>
            </div>
        </>
    )
}