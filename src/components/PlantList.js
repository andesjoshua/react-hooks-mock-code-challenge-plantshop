import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  const plantCard = plants.map(plant => <PlantCard key={plant.id} plantInfo={plant}/>)
  return (
    <ul className="cards">{plantCard}</ul>
  );
}

export default PlantList;