import React from "react";
import Card from "./Card";
import travelPlaces from "../data";

export default function Cards() {
  return (
    <div className="container">
      {travelPlaces.map(function (elem) {
        return <Card key={elem.id} elem={elem} />;
      })}
    </div>
  );
}
