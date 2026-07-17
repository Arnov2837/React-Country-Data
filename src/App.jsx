import { Suspense,  } from 'react'

import './App.css'
import Countris from './Component/Country/Countris'


const CountryDataPromis = fetch('https://openapi.programming-hero.com/api/all')
.then(res =>res.json())


function App() {
  

  return (
    <>

    <Suspense fallback={<p>Country Loding</p>}>
         <Countris CountryPromis={CountryDataPromis}></Countris>
    </Suspense>
    
     
      
       
      
      
    </>
  )
}

export default App
