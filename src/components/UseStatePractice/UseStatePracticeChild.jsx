import React from "react";

export const UseStatePracticeChild = (item) => {
  return (
    <div>
      <p onClick={item.paraCliked}>
        This is {item.first} my age {item.firstAge}
      </p>
      <input type="text" onChange={item.inputChanged} />
    </div>
  );
};
