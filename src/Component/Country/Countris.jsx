import React, { use, useState } from 'react';

const Countris = ({CountryPromis}) => {
  
  const Countriss =use(CountryPromis);
  const Countris =Countriss.countries;
  // console.log(Countris);
  
  return (
    <div>
      <h1>all countrys: {Countris.length}</h1>
    </div>
  );
};

export default Countris;