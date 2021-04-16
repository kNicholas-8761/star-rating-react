import React, {useState} from 'react'
import * as bsIcons from "react-icons/bs";
import * as tiIcons from "react-icons/ti";
import './App.css'
import './StarRating.css'

const StarRating = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    return (
        <div className="container flex-col">
            
            <form className="flex-col">
                <div className="flex">
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
                                color={ratingValue <= (hover|| rating)? "#ffc107" : "#e4e5e9" }
                                onMouseEnter ={() => setHover(ratingValue)}
                                onMouseLeave ={() => setHover(null)}
                                />
                        </label>
                        )
                    
                    })}
                </div>
                <div className="container flex">
                <tiIcons.TiTick size="60"/>         
                <p>Thanks! You rated this {rating} stars. Would you like to add feedback?</p>
                </div>
                <textarea type="text" cols="35" rows="5" placeholder="Enter feedback here . :)"/>
                <button type="submit" onSubmit={handleSubmit}>Submit</button>
            </form>
            
        </div>
    )
}


export default StarRating
                        


            
