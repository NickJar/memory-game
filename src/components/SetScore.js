import React from "react";
import ImageCards from "./imageCards";
import { useState } from "react";

export default function SetScore(props){

    const [highScore, setHighScore] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    let deck = [];
  
    function handleScore() {
      if(highScore <= currentScore)
      setHighScore(currentScore + 1)
      setCurrentScore(currentScore + 1);
  
    }
  

    return  <div>
        <div>Current Score: {currentScore}</div>
        <div>High Score: {highScore}</div>
      
    </div>

}