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
                            <div key={index}>
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
                            </div>
                        )
                    
                    })}
                </div>
                {rating ? (
                <>
                    <div className="flex">
                    <header>You rated this {rating} stars.</header>
                </div>
                    <div className="textarea">
                        <textarea type="text" cols="30" placeholder="Describe youe experience..."/>
                    </div>
                    <div className="btn">
                     <button 
                        type="submit" 
                        onSubmit={handleSubmit}>POST
                    </button>
                </div>
                </>): null}
                
            </form>
        </div>
    )
}

export default StarRating
                        
            





            
