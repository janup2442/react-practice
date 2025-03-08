import { useState } from "react"



export default function RunningModeTimer({currentTime,ChangeMode}){
    const [time , setTime] = useState(currentTime)
      
    return(
        <>
            <div>
                <small>Time Remaining</small>
                <h1>{time.hour<10?`0${time.hour}`:time.hour}:{time.minute<10?`0${time.minute}`:time.minute}:{time.second<10?`0${time.second}`:time.second}</h1>
                <div>
                    <button onClick={()=>ChangeMode()} >Reset</button>
                    <button>Pause</button>
                    <button>Resume</button>
                </div>
            </div>
        </>
    )
}