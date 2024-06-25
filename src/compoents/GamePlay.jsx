import React from "react";
import Score from "./Score";
import SelectedChoice from "./SelectedChoice";
import Rolldice from "./Rolldice";
import styled from "styled-components";
import SelectNumber from "./SelectNumber";
import { useState } from "react";

function GamePlay() {
  const [selectedNumber, setNumber] = useState("");
  const [current, setcurrent] = useState(1);
  const [gameScore, setgameScore] = useState(0);
  const [error, seterror] = useState("");
  const [errorThrow, seterrorThrow] = useState("");

  const getRandomIntInclusive = () => {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(6);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };

  const RollDice = () => {
    let randomNum = getRandomIntInclusive();

    if (!selectedNumber) {
      seterror("No number selected");
      seterrorThrow("noNum");
      return;
    }
    if (randomNum === selectedNumber) {
      seterror("your guess was right");
      setgameScore((prevScore) => prevScore + 6);
      seterrorThrow("");
    } else {
      seterror("your guess was wrong");
      seterrorThrow("wrong");
      setgameScore((prevScore) => prevScore - 2);
    }

    setcurrent((prevNum) => randomNum);
  };

  return (
    <>
      <Main>
        <Container>
          <h1>Roll The Dice</h1>
          <div className="uperPart">
            <SelectedChoice selectedNumber={selectedNumber} />
            <Rolldice current={current} RollDice={RollDice} />
            <Score gameScore={gameScore} />
          </div>
          <div className="lowerPart">
            <SelectNumber setNumber={setNumber} seterror={seterror} />
          </div>
          <h4 className={`error ${errorThrow ? "wrong" : "right"}`}>{error}</h4>
          <h5 className="info">
            &#8226; First select a number from 1-6, then click on roll dice
            button,and try to match the number and dice.
          </h5>
        </Container>
      </Main>
    </>
  );
}

export default GamePlay;

const Main = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a9b2ba;
  @media (max-width: 900px) {
    padding: 10px;
  }
`;

const Container = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 50%;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid white;
  background-color: #82898f;

  h1 {
    width: 100%;
    text-align: center;
    padding-left: 30px;
  }

  .uperPart {
    display: flex;
    flex-direction: row;
    margin-right: 40px;
    margin-top: 20px;
    align-items: center;
    gap: 50px;
  }

  .lowerPart {
    margin-top: 40px;
  }

  .error {
    width: 100%;
    margin-top: 50px;
    text-align: center;
  }

  .wrong {
    background-color: red;
  }

  .right {
    background-color: green;
  }

  h5 {
    margin-top: 10px;
  }

  /* Media Query for smaller screens */
  @media (max-width: 900px) {
    padding-bottom: 30px;
    width: 100%;
    .uperPart {
      gap: 40px;
    }
    h5 {
      margin-top: 0;
    }
  }

  @media (min-width: 900px) {
    .upperPart {
      mrgin-right: 20px;
    }
    .lowerPart {
      margin-top: 20px;
    }
    .error {
      margin-top: 25px;
    }
  }
`;
