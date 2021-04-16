import React, {useState} from 'react'
import * as bsIcons from "react-icons/bs";
import * as tiIcons from "react-icons/ti";
import { ImAngry } from "react-icons/im";
import * as faIcons from "react-icons/fa";
import * as biIcons from "react-icons/bi";

import './App.css'
import './StarRating.css'

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const[isRated, setisRated] = useState(false);

    const handleClick = (e) => {
        
    }

  const messages = {
    "1": "I just hate it ",
    "2": "I dont like it ",
    "3": "It is awesome ",
    "4": "I just like it ", 
    "5": "I just love it "
  };

  const icons = {
    "1": <ImAngry size='30'/>,
    "2": <biIcons.BiAngry size='30'/>,
    "3": <faIcons.FaRegLaughBeam size='60'/>,
    "4": <biIcons.BiCool size='30'/>,
    "5":  <faIcons.FaGrinHearts size='30'/>
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
                    <header>{messages[rating]}{icons[rating]}</header>
                </div>
                    <div className="textarea">
                        <textarea type="text" cols="30" placeholder="Describe youe experience..."/>
                    </div>
                    <div className="btn">
                     <button 
                        type="submit" 
                        onClick={handleClick}>POST</button>
                </div>
                </>): null}
                
            </form>
            <div>
                <button>EDIT</button>
                <header>Thanks for your feedback!</header>
            </div>
        </div>
    )
}

export default StarRating
                        
                    
            





            
