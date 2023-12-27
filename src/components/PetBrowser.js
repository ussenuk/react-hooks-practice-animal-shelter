import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, filters, onAdoptPet}) {

  // let display the pets after fetching

  const petsToDisplay = pets.filter((pet)=>{
    if (filters.type === "all") return pet;
    return pet.type === filters.type;
  });

  // console.log(pets);


  return <div className="ui cards">
    {petsToDisplay.map((item)=>{
      return (
        <Pet 
        key={item.id}
        pet={item}
        onAdoptPet={onAdoptPet}
        />
      )
    })}
    </div>;
}

export default PetBrowser;