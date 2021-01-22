//this is where i will get the picture
//ICE
import React, {useState, useEffect} from "react"
import axios from "axios"
import Date from "./Date"
import moment from "moment"
import Explanation from "./Explanation"
import Title from "./Title"
import Credit from "./Credit"
import { Button, ButtonGroup} from "reactstrap"
import "./App.css";
import ButtonComponent from "./Button"

export default function PhotoOfDay () {

    const [photoData, setPhotoData] = useState([])
    const [num, setNum] = useState(0)
    
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=Kl3oRjboVtggv8OhQtX5kYJOMgXO41NnM08WQs1I&date=' + moment().subtract(`${num}`, 'days').format('YYYY-MM-DD'))
        .then((response) => {

        setPhotoData(response.data)
    })
        .catch((error) => {
            console.log(error)
        })
        
    }, [num])

    return (
        <div>
            {/* <ButtonGroup> */}
            <ButtonComponent className="button" num={num} setNum={setNum} buttonText="Previous"/>
            <ButtonComponent className="button" num={num} setNum={setNum} buttonText="Next"/>
            <ButtonComponent className="button" num={num} setNum={setNum} buttonText="Today"/>

            {/* <ButtonStyle className="button" onClick={() => setNum(num-1)}>Next Day</ButtonStyle>

            <ButtonStyle  className="button" onClick={() => setNum(0)}>Today</ButtonStyle>
            </ButtonGroup> */}
            <br></br>

            <Date date={photoData.date}/>
            
            <img src={photoData.url} alt={photoData.title} />
            <br></br>
            <Title title={photoData.title}/>
            <Credit credit={photoData.copyright}/>
            
            

            <Explanation explanation={photoData.explanation}/>

        </div>
    )
}
