import React from "react";
import { PersonDetails } from "../State/Reducers/PersonDetails";
import FetchingDataChild from "./FetchingDataChild";

export const FetchingDataParent = () => {
  return (
    <div>
      {PersonDetails.person.map((item) => {
        return <FetchingDataChild Info={item} />;
      })}
    </div>
  );
};
