import React from "react";
import styled from "styled-components";

function Score({ gameScore }) {
  return (
    <>
      <Scored>
        <h4>Score</h4>
        <p>{gameScore}</p>
      </Scored>
    </>
  );
}

export default Score;
const Scored = styled.div`
  display: flex;
  flex-direction: column;
  p {
    text-align: center;
  }
  @media (max-width: 900px) {
    h4 {
      font-size: 12px;
    }
  }
`;
