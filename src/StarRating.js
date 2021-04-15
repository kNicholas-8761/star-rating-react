import React, {useState} from 'react'
import * as bsIcons from "react-icons/bs";
import './App.css'

const StarRating = () => {
    const [rating, setRating] = useState(null)
    return (
        <div>
            {[...Array(5)].map((star,index) =>{
                const ratingValue = index + 1;
                return(
                    <label>
                    <input 
                        type="radio" 
                        name="rating"
                        value={ratingValue} 
                        onClick={() => setRating(ratingValue)}
                        />
                    <bsIcons.BsFillStarFill 
                        className="star" 
                        size="100" 
                        color={ratingValue <= rating ? "#ffc107" : "#e4e5e9" }
                        />
                  </label>
                )
              
            })}
        </div>
    )
}


export default StarRating


            
