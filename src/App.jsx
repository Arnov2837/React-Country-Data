import { Suspense,  } from 'react'

import './App.css'
import Countris from './Component/Country/Countris'
import CountryName from './Component/CountryName/CountryName'

const CountryDataPromis = fetch('https://openapi.programming-hero.com/api/all')
.then(res =>res.json())


function App() {
  

  return (
    <>

    <Suspense fallback={<p>Country Loding</p>}>
         <Countris CountryPromis={CountryDataPromis}></Countris>
    </Suspense>
    <CountryName></CountryName>
     
      
       
      
      
    </>
  )
}

export default App
