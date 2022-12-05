import React,{useState} from 'react'
import CircularProgress from "./timerItem/TimerItem"
import '../../../style/game/timer/timer.css'


function Timer() {
  
  let [sec, setSec] = useState(60)
  let [pauseContinueFlag, setPauseContinueFlag] = useState(true)
  let timeInterval



  const runTime = bindSeconds => {
    setSec(bindSeconds)
    timeInterval = setInterval(() => {
      if (sec > 0 || pauseContinueFlag) {setSec(sec--)} 
      if (sec <= 0 || !pauseContinueFlag) {
        clearCurrentInterval(timeInterval)
      }
    },1000)
  
  }

  const clearCurrentInterval = interval =>{
    clearInterval(interval)
  }
  
  return (
    <div className="timer">
      
      
      <CircularProgress
        size={250}
        strokeWidth={20}
        seconds={sec}
        color="rgb(0, 187, 255)"
      />

      <div className='timer__button'>
        <button className='timer__buttonSet60' onClick={          
          ()=>{
            runTime(30)
          }
        } >
          30 seconds
        </button>

        <button className="timer__buttonSet30">
          60 seconds
        </button>

        <button className="timer__buttonSetPause" onClick={
          ()=>{
            setPauseContinueFlag(!pauseContinueFlag)
            console.log(pauseContinueFlag)
          }
        }>
          {pauseContinueFlag? 'Pause' : 'Continue'}
        </button>
      </div>
    </div>
  );
}

export default Timer;
