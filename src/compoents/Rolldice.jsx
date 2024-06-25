import React from "react";
import styled from "styled-components";

function Rolldice({ current, RollDice }) {
  return (
    <>
      <ImageBox>
        <img src={`../images/dices/dice_${current}.png`} onClick={RollDice} />
      </ImageBox>
    </>
  );
}

export default Rolldice;
const ImageBox = styled.div`
  img {
    height: 110px;
    width: 110px;
    cursor: pointer;
  }
  @media (max-width: 900px) {
    img {
      height: 80px;
      width: 80px;
    }
  }
`;
