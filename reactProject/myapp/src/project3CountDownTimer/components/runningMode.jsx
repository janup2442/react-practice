import { useEffect, useRef, useState } from "react"



export default function RunningModeTimer({initialTime,changeMode}){
    const [time,updateTime] = useState(initialTime)
        let i = 0;
       
        const intervalReference = useRef(null);
        useEffect(()=>{
            let hour = document.getElementById('hour')
            let minute = document.getElementById('minute')
            let second = document.getElementById('second')
                intervalReference.current =setInterval(()=>{
                    if(time.hour===0&&time.second===0&&time.minute===0){
                        clearInterval(intervalReference.current)
                    }
                if(time.second>0){
                    updateTime({...time ,second:time.second--})
                }else{
                    if(time.minute>0){
                        updateTime({...time, minute:time.minute--,second:59})
                    }else{
                        if(time.hour>0){
                            updateTime({...time,hour:time.hour--,minute:59,second:59})
                        }else{
                            clearInterval(intervalReference.current)
                        }
                    }
                }

                console.log(time);
                
                
            },1000)


        },[])
    
    
     
    return(
        <>
            <div>
                <small>Time Remaining</small>
                <h1><span id="hour">{String(initialTime.hour).padStart(2,'0')}</span> : <span id="minute">{String(initialTime.minute).padStart(2,'0')}</span> : <span id="second">{String(initialTime.second).padStart(2,'0')}</span></h1>
                <div>
                    <button onClick={()=>{
                        clearInterval(intervalReference.current);
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