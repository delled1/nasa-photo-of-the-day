//this is where i will get the picture
//ICE
import React, {useState, useEffect} from "react"
import axios from "axios"
import Date from "./Date"
import moment from "moment"
import Explanation from "./Explanation"
import Title from "./Title"
import Credit from "./Credit"

// let num = 0;
// let todaysDate = moment().format('YYYY-MM-DD')
// let dateOfPic =moment().subtract(num, 'days').format('YYYY-MM-DD')


// console.log(yesterdaysDate)

export default function PhotoOfDay () {

    const [photoData, setPhotoData] = useState([])
    const [num, setNum] = useState(0)

   
    // let num = 0 
    console.log(num)
    
    
    let dateOfPic =moment().subtract(num, 'days').format('YYYY-MM-DD')
    
    
    
    
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=Kl3oRjboVtggv8OhQtX5kYJOMgXO41NnM08WQs1I&date=' + dateOfPic)
        .then((response) => {
        console.log(response)
        setPhotoData(response.data)
        setNum(num - 1)
        
        
        
    
    
    })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <div>
            
            <button onClick={setNum(num-1)}>Previous Day</button>
            <Date date={photoData.date}/>
            <button>TEXT</button>
            <img src={photoData.url} alt={photoData.title} />
            <br></br>
            <Title title={photoData.title}/>
            <Credit credit={photoData.copyright}/>
            
            

            <Explanation explanation={photoData.explanation}/>

        </div>
    )
}
