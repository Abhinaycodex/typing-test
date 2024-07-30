import React from 'react'
import { useState , useEffect } from 'react';
import Timer from './Timer';
import TextInput from './TextInput';
import Results from './Results';



function TypingTest() {
    
  const [text, setText] = useState('');
  const [input, setInput] = useState("");
  const [timeleft, setTimeleft] = useState(10);
  const [isfinished, setIsfinished] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);


//  const [Words, setWords] = useState(0);
//  const [Correct, setCorrect] = useState(0);
//  const [Incorrect, setIncorrect] = useState(0);
//  const [Accuracy, setAccuracy] = useState(0);




  useEffect(() => {
      if (timeleft > 0 && !isfinished) {
        const timerId = setInterval(() => {
          setTimeleft(timeleft - 1);
          setTimeElapsed(prev => prev + 1);
        },
        1000);
        return () => clearInterval(timerId);
      }
       else if (timeleft === 0) {
        setIsfinished(true);
      }
    }, [timeleft, isfinished]);

    const handleChange = (e) => {
      setInput(e.target.value);
    };


  return (
    <>
    <div className='bg-slate-400 max-w-full h-full p-4 m-2'>
      <h1 className='text-green-800 text-3xl '>TypingTest</h1> 
    <Timer Timeleft={timeleft} />
    <TextInput input={input} handleChange={handleChange} />
    {isfinished && <Results text={text} input={input} timeElapsed={timeElapsed} />}

    </div>

    </>
  )
}

export default TypingTest