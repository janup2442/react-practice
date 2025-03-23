import { useEffect, useRef, useState } from "react"



export default function RunningModeTimer({initialTime,changeMode}){
    const [time,updateTime] = useState(initialTime)
        let i = 0;
        let hour = document.getElementById('hour');
        let minute = document.getElementById('minute'); 
        let second = document.getElementById('second');
        let intervalReference = useRef(null);
        useEffect(()=>{
             intervalReference.current =setInterval(()=>{
                // console.log(i++);
                
            },1000)


        },[])
    
    
     
    return(
        <>
            <div>
                <small>Time Remaining</small>
                <h1><span id="hour">{String(initialTime.hour).padStart(2,'0')}</span> : <span id="minute">{String(initialTime.minute).padStart(2,'0')}</span> : <span id="second">{String(initialTime.second).padStart(2,'0')}</span></h1>
                <div>
                    <button onClick={()=>{
                        //clearInterval(intervalReference.current);
                        changeMode(1);
                    }
                    } >Reset</button>
                    <button>Pause</button>
                    <button>Resume</button>
                </div>
            </div>
        </>
    )
}