import React from "react";
import styled from "styled-components";
function StartGame({ startplay }) {
  return (
    <>
      <Container>
        <div className="contents">
          <div className="left">
            <img src="../images/dices.png" />
          </div>
          <div className="right">
            <h1>DICE GAME</h1>
            <Button onClick={startplay}>PLAY NOW</Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default StartGame;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .contents {
    overflow: hidden;
    display: flex;
    height: 60%;
    width: 80%;

    .left,
    .right {
      height: 100%;

      width: 50%;
    }
    .left img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      display: block;
    }
    .right {
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }
    .right h1 {
      font-size: 96px;
      margin-left: auto;
    }
    .right Button {
      border: 1px solid transparent;
      border: 2px solid transparent;
      border-radius: 10px;
      &:hover {
        background-color: white;
        color: black;
        border: 2px solid black;
      }
    }
    @media (max-width: 1050px) {
      flex-direction: column;
      .left,
      .right {
        width: 100%;
        height: 50%;
      }
      .right h1 {
        font-size: 45px;
      }
      .left img {
        height: 100%;
        width: 100%;
        object-fit: contain;
        display: block;
      }
    }
  }
`;
const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  width: 220px;
  font-size: 16px;
  font-weight: 600;
  padding: 10px;
`;
