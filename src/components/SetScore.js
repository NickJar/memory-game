import React, { useEffect } from "react";
import { useState } from "react";

export default function SetScore(props) {
  useEffect(() => {
    const loadDeck = async () => {
      await props.deck;
    };
    loadDeck();
  });

  let [newDeck, setNewDeck] = useState(props.deck);

  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [guessedCards, setGuessedCards] = useState([]);

  function handleScore(img) {
    if (!guessedCards.includes(img)) {
      setGuessedCards([...guessedCards, img]);
      setCurrentScore(currentScore + 1);
      console.log(guessedCards);
      if (highScore <= currentScore) setHighScore(currentScore + 1);
    }
    if (guessedCards.includes(img)) {
      Resetgame();
    }

    setNewDeck((newDeck = newDeck.sort(() => 0.5 - Math.random())));
  }

  function Resetgame() {
    setCurrentScore(0);
    setGuessedCards([]);
  }

  return (
    <div>
      <div>Current Score: {currentScore}</div>
      <div>High Score: {highScore}</div>
      <div className="flexContainer">
        {newDeck.map((card, index) => {
          return (
            <div key={index}>
              <img
                onClick={function () {
                  handleScore(card.img);
                }}
                alt=""
                src={card.img}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
