import React from "react";
import styled from "styled-components";

function SelectedChoice({ selectedNumber }) {
  return (
    <>
      <Choices>
        <h4>SelectedChoice</h4>
        <p>{selectedNumber ? selectedNumber : "null"}</p>
      </Choices>
    </>
  );
}

export default SelectedChoice;
const Choices = styled.div`
  display: flex;
  flex-direction: column;
  p {
    text-align: center;
  }
  @media (max-width: 900px) {
    h4 {
      font-size: 12px;
      padding-left: 5px;
    }
  }
`;
