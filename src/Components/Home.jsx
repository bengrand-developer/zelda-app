import React, { useEffect, useState } from "react";
import Axios from "axios";
import Game from "./Game";

const Home = () => {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    Axios.get(`https://zelda-api.apius.cc/api/games`)
      .then((response) => response.data)
      .then((data) => setGameList(data))
      .catch((err) => console.log("err"));
  }, []);

  return (
    <div className="Home-container">
      Home
      {gameList.map((game) => (
        <Game key={game.id} game={game} />
      ))}
    </div>
  );
};

export default Home;
