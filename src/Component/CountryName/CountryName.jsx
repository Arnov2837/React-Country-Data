import React, { useState } from 'react';
import './CountryName.css';




const CountryName = ({Countryname,handele}) => {


  const [visit , setvisit] = useState(false);
  // console.log(CountryName);
  console.log(handele);
  const visits =() =>{
    // setvisit(true)
    if(visit){
      setvisit(false)

    }
    else{
      setvisit(true)
    };
    handele(Countryname)
    
  }

  return (
    <div className ={`country ${visit && 'country-visited' }`}>
       <h3>Name:{Countryname.name.common}</h3>
       <img src={Countryname.flags.flags.png} alt={Countryname.flags.flags.alt}></img>
       <p>continents:{Countryname.continents.continents}</p>
       <p>languages:{Countryname.languages.languages.eng}</p>
       <p>population:{Countryname.population.population}</p>
       <p>area:{Countryname.area.area} 
        {Countryname.area.area > 3000 ? "Big Crounty" :"Small crounty"}</p>
        <button onClick={visits}>
          
           {visit ? 'dukci':'duki nai'}
        </button>
    </div>
  );
};

export default CountryName;