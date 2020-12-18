import React from "react";

const Game = ({ game }) => {
  return (
    <div className="Game">
      <div className="Game-container">
        Jeu
        <h1>{game.name}</h1>
        <p>{game.description}</p>
        <p>{game.released_date}</p>
      </div>
    </div>
  );
};

export default Game;
