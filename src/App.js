import React from "react";
import "./App.css";
import PhotoOfDay from "./Image"
//import axios from 'axios'

function App() {
  return (
    <div className="App">
      
       
        <h1><span role="img" aria-label='go!'>🚀</span> ASTRONOMY PICTURE OF THE DAY <span role="img" aria-label='go!'>🚀</span></h1>
        
      
      <p>
      Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.
      </p>
        <br></br>
        <PhotoOfDay />
      
    </div>
  );
}

export default App;
