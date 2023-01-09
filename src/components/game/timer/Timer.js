import React,{useState, useEffect} from 'react'
import CircularProgress from "./timerItem/TimerItem"
import '../../../style/game/timer/timer.css'


function Timer({isOpen}) {
  
  const [sec, setSec] = useState(60)
  const [isCounting, setIsCounting] = useState(false)
  
  useEffect(()=>{
    const interval = setInterval(()=>{
      isCounting &&
        setSec((sec) => (sec >= 1 ? sec - 1 : 0))  
    },1000)
    if (sec === 0) setIsCounting(false)
    return () =>{
      clearInterval(interval)
    }
  }, [sec,isCounting])

  const handleStart30 = ()=>{
    if(!isCounting) setIsCounting(false)
      setSec(30)
      setIsCounting(true)
  }
  const handleStart60 = ()=>{
    if(!isCounting) setIsCounting(false)
      setSec(60)
      setIsCounting(true)
  }
  const handlePause = ()=>{
    setIsCounting(false)
  }
  const handleContunue = ()=>{
    setIsCounting(true)
  }

  return (
    <div className={`timer ${!isOpen && 'timer__mt100'}`}>
      
      
      <CircularProgress
        size={250}
        strokeWidth={20}
        seconds={sec}
        color="rgb(0, 187, 255)"
      />

      <div className='timer__button'>
        <button className='timer__buttonSet30' onClick={handleStart30}>
          30 seconds
        </button>

        <button className="timer__buttonSet60" onClick={handleStart60}>
          60 seconds
        </button>
          {isCounting ? <button className="timer__buttonSetPause" onClick={handlePause}>Pause</button> : <button className="timer__buttonSetPause" onClick={handleContunue}>Conntinue</button>}
        
      </div>
    </div>
  );
}

export default Timer;
