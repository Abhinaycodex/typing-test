
const Results = ({ text, input, timeElapsed, wpm }) => {
  // Split the original text and input text into arrays of words
  const wordsArray = text.trim().split(' ');
  const inputWordsArray = input.trim().split(' ');

  // Calculate correct and incorrect words
  const correctWords = inputWordsArray.filter((word, index) => normalizeWord(word) === normalizeWord(wordsArray[index])).length;
  const incorrectWords = inputWordsArray.length - correctWords;

  const incorrectword =  inputWordsArray.filter((word, index) => word != wordsArray[index]);
  console.log(incorrectword);
  const normalizeWord = (word) => word.replace(/[^\w\s]|_/g, '').toLowerCase();

  // Calculate accuracy as a percentage
  const accuracy = ((correctWords / wordsArray.length) * 100).toFixed(2);

  console.log(incorrectWords);
  return (
    <div className="bg-white p-4 border rounded-md mt-4">
      <h2 className="text-xl font-semibold mb-2">Results</h2>
      <p><strong>Time Elapsed:</strong> {timeElapsed} seconds</p>
      <p><strong>Words Per Minute (WPM):</strong> {wpm}</p>
      <p><strong>Correct Words:</strong> {correctWords}</p>
      
      <p><strong>Incorrect Words:</strong> {incorrectWords}</p>
      <p><strong>Accuracy:</strong> {accuracy}%</p>
    </div>
  );
};

export default Results;
