import React from "react";
import {useState} from 'react'

function NewPlantForm({addPlant}) {

  const [form, setForm] = useState({
    name: '',
    image: '',
    price: ''
  })

  function handleSubmit(e) {
    e.preventDefault();

    const newPlant = {
      name: form.name,
      image: form.image,
      price: form.price
    }
        fetch('http://localhost:6001/plants', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(newPlant)
        })
        .then(r => r.json())
        .then(addPlant)
  }

  function handleFormChange(event) {
    setForm({
      ...form,
      [event.target.name] : event.target.value
    })
  }
  
  

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="" value={form.name} onChange={handleFormChange}/>
        <input type="text" name="image" placeholder="Image URL" value={form.image} onChange={handleFormChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={form.price} onChange={handleFormChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
