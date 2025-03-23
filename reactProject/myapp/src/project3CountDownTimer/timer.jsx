import { useState } from "react";
import SettingModeTimer from "./components/settingMode";
import RunningModeTimer from "./components/runningMode";




export default function Timer(){
    const [mode,setMode]  = useState(1);
    const changeMode = ()=>{
        setMode(!mode);
    }
    const [time ,setTime] = useState({
        hour:0,
        minute:0,
        second:0
    });
    const onChangeTime = (time)=>{
        setTime(time);
    }
    return(
        <>
            <div>
                <div>
                    <h3>Timer</h3>
                </div>
                {
                    mode?<SettingModeTimer setTime={onChangeTime} changeMode={changeMode}/>:<RunningModeTimer initialTime={time} changeMode={changeMode}/>
                }
                
            </div>
        </>
    )
}