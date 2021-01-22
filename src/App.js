import React from "react";
import "./App.css";
import PhotoOfDay from "./Image"
import styled from 'styled-components'

const WrapperDiv = styled.div `
  text-align: center;
`;

const H1 = styled.h1 `
  background-color: blue;
  color: white;

`;

function App() {
  return (
    <WrapperDiv>
      
       
        <H1><span role="img" aria-label='go!'>🚀</span> ASTRONOMY PICTURE OF THE DAY <span role="img" aria-label='go!'>🚀</span></H1>
        
      <br></br>
      <p>
      Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.
      </p>
    
        <PhotoOfDay />
      
    </WrapperDiv>
  );
}

export default App;
