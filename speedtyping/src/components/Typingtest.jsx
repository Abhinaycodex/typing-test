import { useState, useEffect } from 'react';
import Timer from './Timer';
import TextInput from './TextInput';
import Results from './Results';
import MOCK_DATA from '../../public/MOCK_DATA (2).json'

function TypingTest() {
  const [text, setText] = useState('');
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(30); // default 30 seconds
  const [duration, setDuration] = useState(30); // default duration
  const [isFinished, setIsFinished] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  // Fetch paragraph from API
  const fetchParagraph = async () => {
    console.log (MOCK_DATA)
    try {
      
      // const response = await fetch();
      // if (!response.ok) throw new Error(`API request failed with status ${response.status}`);
      // const data = await response.json();
      const randomIndex = Math.floor(Math.random() * MOCK_DATA.length);
      setText(MOCK_DATA[randomIndex].para_id);
      console.log(MOCK_DATA[0].para_id);   
    } catch (error) {
      console.error('Error fetching paragraph:', error);
      setText("Failed to load paragraph. Please try again later.");
    }
  }; 

  // Fetch new paragraph when component mounts or duration changes
  useEffect(() => {
    fetchParagraph();
  }, [duration]);

  // Timer effect: start countdown only if started
  useEffect(() => {
    if (timeLeft > 0 && isStarted && !isFinished) {
      const timerId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else if (timeLeft === 0) {
      setIsFinished(true);
      calculateWPM();
    }
  }, [timeLeft, isStarted, isFinished]);

  const handleDurationChange = (e) => {
    const selectedDuration = Number(e.target.value);
    setDuration(selectedDuration);
    resetTest(selectedDuration);
    fetchParagraph(); // Fetch a new paragraph on duration change
  };

  const calculateWPM = () => {
    const wordsArray = text.trim().split(' ');
    const inputWordsArray = input.trim().split(' ');
    const correctWords = inputWordsArray.filter((word, index) => word === wordsArray[index]).length;
    const timeInMinutes = timeElapsed / 60;
    setWpm(Math.round(correctWords / timeInMinutes) || 0);
  };

  const handleChange = (e) => {
    if (!isStarted) setIsStarted(true); // Start the timer on first input
    setInput(e.target.value);
  };

  const resetTest = (newDuration = duration) => {
    setInput("");
    setTimeLeft(newDuration);
    setIsFinished(false);
    setIsStarted(false);
    setTimeElapsed(0);
    setWpm(0);
  };

  return (
    <div className="bg-slate-400 max-w-full h-full p-4 m-2">
      <h1 className="text-green-800 text-3xl">TypingTest</h1>
      
      <label className="block mb-2">Select Test Duration: 
        <select onChange={handleDurationChange} className="ml-2">
          <option value={30}>30 seconds</option>
          <option value={60}>1 minute</option>
          <option value={120}>2 minutes</option>
          <option value={180}>3 minutes</option>
          <option value={300}>5 minutes</option>
        </select>
      </label>
      
      <Timer timeLeft={timeLeft}  />
      <p className="mb-4">{text}</p>
      <TextInput input={input} handleChange={handleChange} />
      {isFinished && <Results text={text} input={input} timeElapsed={timeElapsed} wpm={wpm} />}
    </div>
  );
}

export default TypingTest;
