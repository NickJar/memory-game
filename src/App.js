import "./App.css";
import Header from "./components/header";
import ImageCards from "./components/imageCards";
import { useState } from "react";
import axios, { AxiosHeaders } from "axios";
import { useQuery } from "@tanstack/react-query";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);

  const handleScore = () => setCurrentScore((prevScore) => prevScore + 1);

  const highscoreCheck = () => {
    if (currentScore >= highScore) setHighScore(currentScore + 1);
  };

  return (
    <div className="App">
      <Header />
      <div>Current Score: {currentScore}</div>
      <div>High Score: {highScore}</div>
      <div className="flexContainer">
     
      <ImageCards />
 
      </div>
    </div>
  );
}

export default App;
