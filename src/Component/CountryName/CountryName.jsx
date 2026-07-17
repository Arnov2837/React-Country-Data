import React from 'react';
import './CountryName.css';

const CountryName = ({Countryname}) => {
  // console.log(CountryName);
  const visit =() =>{
    console.log('clic kkorci');
    
  }

  return (
    <div className ='country'>
       <h3>Name:{Countryname.name.common}</h3>
       <img src={Countryname.flags.flags.png} alt={Countryname.flags.flags.alt}></img>
       <p>continents:{Countryname.continents.continents}</p>
       <p>languages:{Countryname.languages.languages.eng}</p>
       <p>population:{Countryname.population.population}</p>
       <p>area:{Countryname.area.area} 
        {Countryname.area.area > 3000 ? "Big Crounty" :"Small crounty"}</p>
        <button onClick={visit}>Not visited</button>
    </div>
  );
};

export default CountryName;