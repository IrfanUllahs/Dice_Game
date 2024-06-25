import React, { useState } from "react";
import styled from "styled-components";

function SelectNumber({ setNumber, seterror }) {
  const Numberarray1 = [1, 2, 3];
  const Numberarray2 = [4, 5, 6];

  const [selectedNumber, setSelectedNumber] = useState(null);

  const clickHandler = (value) => {
    setNumber(value);
    seterror("");
    setSelectedNumber(value);
  };

  return (
    <>
      <BoxNum>
        <div className="Boxes">
          {Numberarray1.map((value, index) => (
            <h4
              key={index}
              onClick={() => clickHandler(value)}
              className={selectedNumber === value ? "selected" : ""}
            >
              {value}
            </h4>
          ))}
        </div>
        <div className="Boxes">
          {Numberarray2.map((value, index) => (
            <h4
              key={index}
              onClick={() => clickHandler(value)}
              className={selectedNumber === value ? "selected" : ""}
            >
              {value}
            </h4>
          ))}
        </div>
      </BoxNum>
    </>
  );
}

export default SelectNumber;

const BoxNum = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  .Boxes {
    display: flex;
    gap: 100px;
    align-items: center;
    justify-content: center;
    @media (max-width: 900px) {
      gap: 50px;
    }
  }
  .Boxes h4 {
    background-color: #ffff;
    border-radius: 10px;
    height: 60px;
    width: 50px;
    text-align: center;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: grey;
    }
  }

  .Boxes h4.selected {
    background-color: #4269f5;
    border: 1px solid white;
  }
`;
