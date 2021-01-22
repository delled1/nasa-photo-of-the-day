import styled from 'styled-components'
import React from 'react';



const ButtonStyle = styled.button`
    padding: 6px 10px;
    margin:  0 10px 5px 10px;
    border: none;
    border-radius: 3px;
    color: white;
    width: 10rem;
    background-color: darkblue;



    

`;


function ButtonComponent ({setNum, num, buttonText}) {

    switch (buttonText){
        case "Previous": return (
            <ButtonStyle onClick={() => setNum(num+1)}>Previous Day</ButtonStyle>
        )
        case "Next" : return (
            <ButtonStyle onClick={() => setNum(num-1)}>Next Day</ButtonStyle>
        )
        case "Today": return (
            <ButtonStyle onClick={() => setNum(0)}>Today</ButtonStyle>
        )

    }
    
}

export default ButtonComponent