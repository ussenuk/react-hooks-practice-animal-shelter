import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  
  // event callbacks handling in the parent component for select option in the filter
  function handleTypeChange(event){

    setFilters({type: event.target.value});

  }


  function handleFindClick(){

    if (filters.type === "all") 
    
    {
      fetch("http://localhost:3001/pets")
            .then((r)=> r.json())
            .then((data)=> setPets(data))
    }

    else if (filters.type === "cat") 
    
    {
      fetch("http://localhost:3001/pets?type=cat")
    .then((r)=> r.json())
    .then((data)=> setPets(data))
    }

    else if (filters.type === "dog") 
    
    {
      fetch("http://localhost:3001/pets?type=dog")
    .then((r)=> r.json())
    .then((data)=> setPets(data))
    }
    

    else if (filters.type === "micropig") 
    
    {fetch("http://localhost:3001/pets?type=micropig")
    .then((r)=> r.json())
    .then((data)=> setPets(data))
    }

  }

  // console.log(filters)

  function handleAdoptPet(id){
    const updatedPets = pets.map((pet) => {
      return pet.id === id ? { ...pet, isAdopted: true } : pet;
    });
    setPets(updatedPets);

  }



  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleTypeChange} onFindPetsClick={handleFindClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} filters={filters} onAdoptPet={handleAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;