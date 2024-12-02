import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState(""); // Initialize state with an empty string

  const LowerCase = () => {
    // Update the state with the lowercase version of text
    setText(text.toLowerCase());
  };
  const UpperCase = () => {
    // Update the state with the UpperCase version of text
    setText(text.toUpperCase());
  };
  const capitalizeWords = () => {
    setText(
      text
        .toLowerCase() // Ensure all letters are lowercase first
        .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize the first letter of each word
    );
  };

  return (
    <div className="App">
      <div className="h-screen w-full bg-black flex justify-center">
        <div className="max-w-[600px] w-full p-4">
          {/* Textarea bound to the 'text' state */}
          <textarea
            rows={12}
            value={text}
            onChange={(e) => setText(e.target.value)} // Update state on input change
            className="w-full p-2 border border-gray-300 rounded-md resize-none"
            placeholder="Enter your text"
          ></textarea>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {/* Button triggering the LowerCase function */}
            <button
              onClick={LowerCase}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              LowerCase
            </button> 
            <button
              onClick={UpperCase}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              UpperCase
            </button>
            <button
              onClick={capitalizeWords}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Capitalize
            </button>
          </div>
          <h1 className='my-2 text-start text-white'>Your text summmary</h1>
          <p className='text-start text-white'> words length : {text.split(" ").length} Characters length : {text.length} </p>
        </div>
      </div>
    </div>
  );
}

export default App;
