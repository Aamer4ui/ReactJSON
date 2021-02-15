import React from "react";
import { PersonDetails } from "../State/Reducers/PersonDetails";
import FetchingDataChild from "./FetchingDataChild";

export const FetchingDataParent = () => {
  return (
    <div>
      {PersonDetails.pesron.map((employee) => {
        return <FetchingDataChild employeeInfo={employee} />;
      })}
    </div>
  );
};
