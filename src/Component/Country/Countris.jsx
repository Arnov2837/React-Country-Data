import React, { use, useState } from 'react';
import CountryName from '../CountryName/CountryName';
const Countris = ({CountryPromis}) => {
  
  const Countriss =use(CountryPromis);
  const Countris =Countriss.countries;
  // console.log(Countris);
  
  return (
    <div>
      <h1>all countrys: {Countris.length}</h1>

      {
        Countris.map(Countryname => <CountryName Countryname={Countryname}></CountryName>)
      }
    </div>
  );
};

export default Countris;