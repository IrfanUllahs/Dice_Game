import { useState } from "react";
import styled from "styled-components";
import StartGame from "./compoents/StartGame";
import GamePlay from "./compoents/GamePlay";

function App() {
  const [IsstartGame, setIsstartGame] = useState(false);
  const StartGameNow = () => {
    setIsstartGame((Prvgame) => !Prvgame);
  };
  return (
    <>{IsstartGame ? <GamePlay /> : <StartGame startplay={StartGameNow} />}</>
  );
}

export default App;
