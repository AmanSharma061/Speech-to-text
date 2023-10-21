import "./App.css";
import React from "react";
import regeneratorRuntime from "regenerator-runtime";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useClipboard from "react-use-clipboard";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
function App() {
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
  useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  const ddd = () => {

    document.getElementById("copy").innerHTML = "copied";
    
    setTimeout(() => {
      document.getElementById("copy").innerHTML = "Copy";
    
   }, 2000);


  }
  
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN"},{color:"white"});
    
    const xxx = () => {
      startListening();
      document.getElementById("start").style.backgroundColor = "#60a5fa";
      document.getElementById("start").innerHTML = "started";
      // transcript = "white";
    };

  const yyy = () => {
    SpeechRecognition.stopListening();
    document.getElementById("start").style.backgroundColor = "#d1d5db";
    document.getElementById("start").innerHTML = "Start Speaking";
  };
  
  
  const reference = React.useRef(null);
  const [isCopied, setCopied] = useClipboard(transcript);

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-16 ">

        <h1 className="font-bold  text-xl font-mono text-gray-200 md:text-4xl ">

          Speech To Text Convertor
        </h1>
        <p className=" font-mono text-gray-300 font-bold mx-5  ">
          Speak whatever you want to convert to text...
        </p>


        <div id="box" className=" h-96 relative justify-center flex items-center  w-full px-4 md:w-1/2  sm:w-1/2  mt-5"  ref={reference}>
          <p className="text-white font-mono">{transcript}</p>
          <div className="absolute bottom-2  gap-2 flex mx-2 " id="buttons">
            <button
              className="px-4 bg-gray-300 rounded hover:bg-white font-mono hover:px-3   box-border"
              id="copy"
              onClick={setCopied}
            >
             {isCopied?"Copied":"Copy"}
            </button>
            <button
              className="px-1 py-2  bg-gray-300 rounded hover:bg-white font-mono  box-border hover:px-2"
              id="start"
              onClick={xxx}
            >
              Start Speaking
            </button>
            <button
              className="px-1 py-2  bg-gray-300 rounded hover:bg-white font-mono hover:px-0   box-border "
              onClick={yyy}
            >
              {" "}
              Stop Speaking
            </button>
            <button
              className="px-4 py-2 bg-gray-300  rounded hover:bg-white font-mono hover:px-3  box-border"
              onClick={resetTranscript}
            >
              {" "}
              Clear{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
