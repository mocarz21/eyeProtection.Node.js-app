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
  const [time, setTime]= useState(1200);
  const [timeOn, setTimeOn]= useState(false);


useEffect(()=>{

      if(time === 0 ){
      
        if(status === 'work'){
          setStatus('rest'); 
          setTime(100);


        }else if(status === 'rest'){
          setStatus('work');
          setTime(1200);
          
          
        }    
      }
},[time, status])


  const startTimer = () => {
    
    
    
    setStatus('work');
    let count = 
    setTimeOn(setInterval(() => {
     let timeGoOn= setTime(timeMinus => count = timeMinus - 1);
      console.log(count)


    }, 1000)) 

  }

  const closseApp = () =>{
    window.close()
  
  };

  const stopTimer=()=>{

    setTime(1200)
    setStatus('off')
    clearInterval(timeOn)

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
          { status !== "off" && <FormatTime time={time}/>}
        </div>
      { status === "off" && (<button className="btn" onClick={()=>{startTimer()}} >Start</button>)}  
      { status !== "off" && status !== "rest" && (<button className="btn" onClick={()=>{stopTimer()}}>Stop</button>)}
        <button className="btn btn-close" onClick={closseApp}>X</button>
      </div>
    )
      
};

  render(<App />, document.querySelector('#app'));
