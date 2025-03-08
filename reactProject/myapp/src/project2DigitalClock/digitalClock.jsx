import ClockDigitContainer from "./components/clock";
import ClockController from "./components/controlButtons";
import ClockTitle from "./components/title";



export default function DigitalClock(){
    return(
        <>
            <div>
                <ClockTitle/>
                <ClockDigitContainer/>
                <ClockController/>
            </div>
        </>
    )
}