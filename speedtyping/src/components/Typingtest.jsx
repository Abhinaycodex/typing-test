import React from 'react'
import { useState , useEffect } from 'react';
import Timer from './Timer';
import TextInput from './TextInput';
import Results from './Results';



function TypingTest() {
    
  const [Text, setText] = useState('');
  const [Input, setInput] = useState("");
  const [Timeleft, setTimeleft] = useState(60);
  const [Isfinished, setIsfinished] = useState(false);
    
  useEffect(() => {
      if (Timeleft > 0 && !Isfinished) {
        const timerId = setInterval(() => {
          setTimeleft(Timeleft - 1);
        }, 1000);
        return () => clearInterval(timerId);
      } else if (Timeleft === 0) {
        setIsfinished(true);
      }
    }, [Timeleft, Isfinished]);

    const handleChange = (e) => {
      setInput(e.target.value);
    };


  return (
    <>
    <div>
      <h1 className='text-red-500 font-bold  text-3xl bg-slate-600'>TypingTest</h1> 
    <Timer Timeleft={Timeleft} />
    <TextInput input={Input} handleChange={handleChange} />
    {Isfinished && <Results text={Text} input={Input} />}

    </div>

    </>
  )
}

export default TypingTest