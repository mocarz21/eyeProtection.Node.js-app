import React from 'react';
import { render } from 'react-dom';
import { useState, useEffect} from 'react';


const Info=() =>{

  return(
    <div>
      <h1>Protect your eyes</h1>
      <p>According to optometrists in order to save your eyes, you should follow the 20/20/20. It means you should to rest your eyes every 20 minutes for 20 seconds by looking more than 20 feet away.</p>
      <p>This app will help you track your time and inform you when it's time to rest.</p>
    </div>
  );
};


const App =() => {


  const [status, setStatus]  = useState('off');
  const [time, setTimer]= useState(1200);
  const [timeOn, setTimeOn]= useState(false);




  const startTimer = () => {
    
    
    setTimer(1200)
    setStatus('work');
    console.log(status)
    console.log(time)
    
    if(time === 0 ){
      if(status === 'work'){
        status === 'rest'
        console.log('zmiana')
        setTimer(100)
      }else if(status === 'rest'){
        status === 'work'
        setTimer(1200)
      }
      
    }
    useEffect(()=>{
    setTimer(setInterval(() => {
     let timeGoOn= setTimer(timeMinus => timeMinus - 1);
    },1000))},[timeOn])
  }

  const stopTimer=()=>{

    setTimer(1200)
    setStatus('off')
    setTimeOn[true]

  }

  const FormatTime =({time})=>{
    let sec= String(time % 60).padStart(2, '0');
    let min = String(Math.floor(time / 60)).padStart(2, '0');


    return(

      <div>
        { min}:{ sec}
      </div>

    )
  }

    return (
      <div>
        {status === "off"  && (<Info/>)}
        {status === "work" && (<img src="./images/work.png" />)}
        {status === "rest" && (<img src="./images/rest.png" />)}
        <div className="timer">
          {<FormatTime time={time}/>}
        </div>
      { status === "off" && (<button className="btn" onClick={()=>{startTimer()}} >Start</button>)}
      { status !== "off" && (<button className="btn">Stop</button>)}
        <button className="btn btn-close" onClick={stopTimer}>X</button>
      </div>
    )
      
  };

  render(<App />, document.querySelector('#app'));
