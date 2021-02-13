import React, { useState } from "react";
import { UseStatePracticeChild } from "./UseStatePracticeChild";

export const UseStatePracticeParent = () => {
  const [personData, setPersonData] = useState({
    person: [
      { name: "khan", age: 20 },
      { name: "Pathan", age: 21 },
      { name: "Shaikh", age: 22 },
    ],
  });
  const handleNameChange = (nameTwo, nameOne) => {
    setPersonData({
      person: [
        { name: nameTwo, age: 20 },
        { name: "Mazhar Pathan", age: 21 },
        { name: nameOne, age: 22 },
      ],
    });
  };
  const handleOnParagraphCliked = () => {
    setPersonData({
      person: [
        { name: "Mujahed", age: 20 },
        { name: "Rizwan", age: 21 },
        { name: "Khwaja", age: 22 },
      ],
    });
  };
  const handleOnInputChanged = (event) => {
    setPersonData({
      person: [
        { name: "ksdjh", age: event.target.value },
        { name: "jhgjhgf", age: 24 },
        { name: "Roman", age: 25 },
      ],
    });
  };
  return (
    <div>
      <button onClick={() => handleNameChange("Adil", "Zahur")}>
        Change State
      </button>
      <UseStatePracticeChild
        first={personData.person[0].name}
        firstAge={personData.person[0].age}
        paraCliked={handleOnParagraphCliked}
        inputChanged={handleOnInputChanged}
      />
      <UseStatePracticeChild
        first={personData.person[1].name}
        firstAge={personData.person[1].age}
      />
      <UseStatePracticeChild
        first={personData.person[2].name}
        firstAge={personData.person[2].age}
      />
    </div>
  );
};
