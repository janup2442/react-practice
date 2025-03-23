import { useState } from "react";


export default function SettingModeTimer({setTime,changeMode}){
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
        console.log(time);
        
       
    }
    const handleStart = ()=>{
        if(time.hour === 0 && time.minute === 0 && time.second === 0){
            alert("Please set the time to start the timer");
        }else{
            setTime(time);
            changeMode(0);
        }
    }
    return(
        <>
            <div>
                <form action="">
                    <input onChange={(e)=>onChangeTime(e)} type="number" name="hour" min={0} max={23}/>
                    <input onChange={(e)=>onChangeTime(e)} type="number" name="minute" min={0} max={59}/>
                    <input onChange={(e)=>onChangeTime(e)} type="number" name="second" min={0} max={59}/>
                </form>
                <button onClick={()=>handleStart()}>Start Timer</button>
            </div>
        </>
    )
}