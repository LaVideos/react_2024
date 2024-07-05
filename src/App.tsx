import React, {useState} from 'react';
import './App.css';
import {useToggle} from "./hooks/useToggle";
import {usePrevious} from "./hooks/usePrevious";

function App() {

    const [counter, setCounter] = useState<number>(0)

    const {toggle,handleToggle} = useToggle(false);

    const ref = usePrevious(counter);

    console.log(ref)

  return (
   <>
   <button
       onClick={
       ()=>handleToggle()
   }
   >Press</button>

     {
       toggle&&<div>Black</div>
     }

     <hr/>
     <hr/>
     <hr/>
     <hr/>

       <button onClick={()=>setCounter(prevState => prevState+1)}>+</button>
       <button onClick={()=>setCounter(prevState => prevState-1)}>-</button>
       <div>{counter}</div>
   </>
  );
}

export default App;
