import React, { use, useState } from 'react';
import CountryName from '../CountryName/CountryName';
import './Country.css';
const Countris = ({CountryPromis}) => {
  
  const Countriss =use(CountryPromis);
  const Countris =Countriss.countries;
  // console.log(Countris);

  const[visitedCountry,setvisitedCountry] = useState([]);
  const handele = (Countryname) =>{
    console.log('Countrynameparci','Countryname');
    const NewVisCountry = [...visitedCountry,Countryname];
    setvisitedCountry(NewVisCountry);
    
  }
  
  return (
    <div>
      <h1>all countrys: {Countris.length}</h1>

      <h3>visited Country:{visitedCountry.length}</h3>
       <div className='grd'>
         { 
           Countris.map(Countryname => <CountryName
           key={Countryname.cca3.cca3}
            Countryname={Countryname}
              handele ={handele}>
            </CountryName>)
           
          }
       </div>
     
    </div>
  );
};

export default Countris;