import React from 'react';

const CountryName = ({Countryname}) => {
  // console.log(CountryName);
  
  return (
    <div>
       <h3>Name:{Countryname.name.common}</h3>
       <img src={Countryname.flags.flags.png} alt={Countryname.flags.flags.alt}>
    </div>
  );
};

export default CountryName;