import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import {useEffect, useState} from 'react'

function PlantPage() {

  const [plantList, setPlantList] = useState([])
  const [searchValue, setSearchValue] = useState('')


  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(plantData => setPlantList(plantData))
  }, [])

  function addPlant(newPlant) {
    setPlantList([newPlant, ...plantList])
  }

  const plantSearchFilter = plantList.filter((plant) => plant.name.includes(searchValue))
  

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search searchValue={searchValue} setValue={setSearchValue} />
      <PlantList plants={plantSearchFilter}/>
    </main>
  );
}

export default PlantPage;
