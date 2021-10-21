import React from "react";
import {useState} from 'react'

function PlantCard({plantInfo: {name, image, price}}) {

  const [inStock, setInStock] = useState(true)

  const handleInventory = () => {
    setInStock(!inStock)
  }

  
  return (
    <li className="card">
      <img style={{width: 200}} src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleInventory} className="primary">In Stock</button>
      ) : (
        <button onClick={handleInventory}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
