import React, { use, useState } from 'react';
import CountryName from '../CountryName/CountryName';
import './Country.css';
const Countris = ({CountryPromis}) => {
  
  const Countriss =use(CountryPromis);
  const Countris =Countriss.countries;
  // console.log(Countris);
  
  return (
    <div>
      <h1>all countrys: {Countris.length}</h1>
       <div className='grd'>
         {
        Countris.map(Countryname => <CountryName
           key={Countryname.cca3.cca3}
            Countryname={Countryname}></CountryName>)
      }
       </div>
     
    </div>
  );
};

export default Countris;