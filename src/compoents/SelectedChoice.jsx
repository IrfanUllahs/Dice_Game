import React from "react";
import styled from "styled-components";

function SelectedChoice({ selectedNumber }) {
  return (
    <>
      <Choices>
        <h4>SelectedChoice</h4>
        <h5>Select</h5>
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
  h5 {
    font-size: 12px;
    padding-left: 5px;
    display: none;
  }
  @media (max-width: 900px) {
    h4 {
      font-size: 12px;
      padding-left: 5px;
    }
  }
  @media (max-width: 400px) {
    h4 {
      font-size: 12px;
      padding-left: 5px;
      display: none;
    }
    h5 {
      display: block;
    }
  }
`;
